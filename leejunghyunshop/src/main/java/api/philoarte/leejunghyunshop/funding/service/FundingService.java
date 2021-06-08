package api.philoarte.leejunghyunshop.funding.service;

import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.funding.domain.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;


    public interface FundingService {
    String save(FundingDto requestDto);

    List<Funding> getAllFundings();

    default Funding dtoToEntity(FundingDto dto) {
        Funding funding = Funding.builder().fundingId(dto.getFundingId()).title(dto.getTitle())
                .content(dto.getContent()).goalPrice(dto.getGoalPrice()).hashtag(dto.getHashtag()).build();
        return funding;
    }

    FundingDto getFundingById(long id);

    String delete(FundingDto postDto);

    void deleteById(long id);

    List<FundingDto> getListByHashtag(FundingDto dto, String hashtag);

    // ============fileservice below==============
    default FundingFile dtoToEntityFundingFile(FundingFileDto dto) {

        FundingFile fundingFile = FundingFile.builder().fundingFileId(dto.getFundingFileId()).uuid(dto.getUuid())
                .fname(dto.getFname()).build();
        return fundingFile;
    }

    // List<FundingDto> fileBoxByFunding(Long id);
    List<FundingFileDto> registerFile(MultipartFile[] uploadFiles);

    String deleteFile(Long fundingFileId);

    // ============Pagingservice Below==============
    FundingPageDto<FundingDto, Funding> getList(int page);

    default Pageable conditionPage(int page) {
        return PageRequest.of(page <= 0 ? 1 : page - 1, 8, Sort.Direction.DESC, "fundingId");
    }

    default Function<Funding, FundingDto> makeDtoPage() {
        return (en -> pageentityToDto(en));
    }

    FundingPageDto<FundingDto, Funding> getPageById(PageRequestDto requestDto, Long id);

    FundingPageDto<FundingDto, Funding> getPageByArtistId(PageRequestDto requestDto, Long id);

    FundingPageDto<FundingDto, Funding> searchTitleAndContent(PageRequestDto requestDto, String keyword);

    FundingPageDto<FundingDto, Funding> getByartistName(PageRequestDto requestDto, String name);

    default Funding pagedtoToEntity(FundingDto dto) {
        Funding entity = Funding.builder().fundingId(dto.getFundingId()).title(dto.getTitle()).content(dto.getContent())
                .goalPrice(dto.getGoalPrice()).hashtag(dto.getHashtag())
                // .artist(Artist.builder().artistId(dto.getFundingId()).build())
                .build();
        return entity;
    }

    default FundingDto pageentityToDto(Funding entity) {
        return FundingDto.builder().fundingId(entity.getFundingId()).title(entity.getTitle())
                .content(entity.getContent()).goalPrice(entity.getGoalPrice()).hashtag(entity.getHashtag())
                .viewCnt(entity.getViewCnt()).artistId(entity.getArtist().getArtistId())
                .name(entity.getArtist().getName()).fundingFiles(entity.getFundingFiles().stream()
                        .map(fundingFile -> FundingFileDto.of(fundingFile)).collect(Collectors.toList()))
                .build();
    }
}
