package api.philoarte.leejunghyunshop.funding.service;

import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.funding.domain.*;
import api.philoarte.leejunghyunshop.funding.repository.FundingFileRepository;
import api.philoarte.leejunghyunshop.funding.repository.FundingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Log4j2
@RequiredArgsConstructor
public class FundingServiceImpl implements FundingService {

    private final FundingRepository repository;
    private final FundingFileRepository frepo;

    @Transactional
    @Override
    public String delete(FundingDto postDto) {
        Funding funding = Funding.builder().fundingId(postDto.getFundingId()).build();
        repository.delete(funding);
        frepo.deleteByFundingId(funding.getFundingId());

        return (repository.findById(Funding.of(postDto).getFundingId()) == null) ? "Delete Success" : "Delete Failed";
    }

    @Transactional
    @Override
    public void deleteById(long id) {
        frepo.deleteByFundingId(id);
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public String save(FundingDto requestDto) {
        Funding toEntityRequest = pagedtoToEntity(requestDto);
        repository.save(toEntityRequest);
        List<FundingFileDto> fundingFiles = requestDto.getFundingFiles();
        if (!fundingFiles.isEmpty()) {
            fundingFiles.forEach(fundingFiledtos -> {
                FundingFile f = dtoToEntityFundingFile(fundingFiledtos);
                f.confirmFunding(toEntityRequest);
                frepo.save(f);
            });
        }
        return (repository.save(toEntityRequest) != null) ? "success" : "Fail";
    }

    @Transactional
    @Override
    public List<Funding> getAllFundings() {
        return repository.getAllFundings();
    }

    @Override
    @Transactional
    public FundingDto getFundingById(long id) {
        Funding funding = repository.findById(id).orElseThrow(IllegalArgumentException::new);

        return pageentityToDto(funding);
    }
    // @Override
    // public FundingDto getFundingById(long id) {
    // List<Funding> funding = repository.getOneFunding(id);
    // List<FundingDto> dto = FundingDto.tlist(funding);
    // return (FundingDto) dto;
    // }

    @Value("${shop.upload.path}")
    private String uploadPath;

    @Transactional
    @Override
    public List<FundingFileDto> registerFile(MultipartFile[] uploadFiles) {

        List<FundingFileDto> resultDtoList = new ArrayList<>();
        for (MultipartFile uploadFile : uploadFiles) {

            String ofname = uploadFile.getOriginalFilename();
            String fileName = ofname.substring(ofname.lastIndexOf("\\") + 1);

            String uuid = UUID.randomUUID().toString();

            String saveName = uploadPath + File.separator + uuid + "_" + fileName;
            Path savePath = Paths.get(saveName);

            try {
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + File.separator + "s_" + uuid + "_" + fileName;

                File thumbnailFile = new File(thumbnailSaveName);
                // 섬네일 생성
                Thumbnailator.createThumbnail(savePath.toFile(), thumbnailFile, 100, 100);

                FundingFileDto fundingFileDto = FundingFileDto.builder()

                        .fname(fileName).uuid(uuid).build();
                resultDtoList.add(fundingFileDto);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return (ArrayList<FundingFileDto>) resultDtoList;
    }

    @Override
    public String deleteFile(Long fundingFileId) {
        frepo.deleteById(fundingFileId);
        return (frepo.findById(fundingFileId) != null) ? "Delete Success" : "Delete Failed";
    }

    @Transactional
    @Override
    public FundingPageDto<FundingDto, Funding> getPageById(PageRequestDto requestDto, Long id) {
        return new FundingPageDto<>(
                repository.getPageById(requestDto.getPageable(Sort.by("fundingId").descending()), id),
                entity -> pageentityToDto(entity));
    }

    public FundingPageDto<FundingDto, Funding> getPageByArtistId(PageRequestDto requestDto, Long id) {

        return new FundingPageDto<>(
                repository.getPagebyArtistId(requestDto.getPageable(Sort.by("fundingId").descending()), id),
                (entity -> pageentityToDto(entity)));
    }

    @Transactional
    @Override
    public FundingPageDto<FundingDto, Funding> searchTitleAndContent(PageRequestDto requestDto, String keyword) {

        return new FundingPageDto<>(
                repository.searchIndex(requestDto.getPageable(Sort.by("fundingId").descending()), keyword, keyword),
                entity -> pageentityToDto(entity));
    }

    @Transactional
    @Override
    public FundingPageDto<FundingDto, Funding> getByartistName(PageRequestDto requestDto, String name) {
        return new FundingPageDto<>(
                repository.getPageByartistName(requestDto.getPageable(Sort.by("fundingId").descending()), name),
                entity -> pageentityToDto(entity));
    }

    @Transactional
    @Override
    public FundingPageDto<FundingDto, Funding> getList(int page) {
        return new FundingPageDto<>(repository.getRecent(conditionPage(page)), makeDtoPage());
    }

    @Transactional
    @Override
    public List<FundingDto> getListByHashtag(FundingDto dto, String hashtag) {
        List<Funding> getHashtagList = repository.searchFundingByHashtag(hashtag);
        List<FundingDto> postHashtagList = FundingDto.tlist(getHashtagList);
        return postHashtagList;
    }

}