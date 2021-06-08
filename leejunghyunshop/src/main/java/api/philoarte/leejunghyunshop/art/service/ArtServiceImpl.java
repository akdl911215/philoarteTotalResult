package api.philoarte.leejunghyunshop.art.service;

import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.art.domain.ArtDTO;
import api.philoarte.leejunghyunshop.art.domain.ArtFile;
import api.philoarte.leejunghyunshop.art.domain.ArtFileDTO;
import api.philoarte.leejunghyunshop.art.repository.ArtFileRepository;
import api.philoarte.leejunghyunshop.art.repository.ArtRepository;
import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.category.domain.Category;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.resume.domain.Resume;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

@Log4j2
@RequiredArgsConstructor
@Service
public class ArtServiceImpl implements ArtService {

    private final ArtFileServiceImpl artFileService;

    private final ArtRepository artRepository;

    private final ArtFileRepository artFileRepository;

    @Transactional
    @Override
    public Long register(ArtDTO artDTO) {

        Art art = dtoToEntity(artDTO);

        artRepository.save(art);

        log.info(art);

        List<ArtFileDTO> artFileDtos = artDTO.getFiles();

        if (artFileDtos != null && artFileDtos.size() > 0) {
            artFileDtos.forEach(artFileDTO -> {
                ArtFile artFile = dtoToEntityFiles(artFileDTO);
                artFile.setArt(art);
                log.info("ArtFile: " + artFile);
                artFileRepository.save(artFile);
            });
        }

        return art.getArtId();

    }

    @Transactional
    @Override
    public PageResultDto<ArtDTO, Object[]> getList(PageRequestDto pageRequestDTO) {

        log.info(pageRequestDTO);

        Function<Object[], ArtDTO> fn = (entity -> entityToDto((Art) entity[0], (Artist) entity[1],
                (Category) entity[2], (Resume) entity[3], getFilesByArtId(((Art) entity[0]).getArtId())));

        Page<Object[]> result = artRepository.getArts(pageRequestDTO.getPageable(Sort.by("artId").descending()));

        return new PageResultDto<>(result, fn);

    }

    @Transactional
    @Override
    public PageResultDto<ArtDTO, Object[]> getSearch(PageRequestDto pageRequestDTO) {

        Function<Object[], ArtDTO> fn = (entity -> entityToDto((Art) entity[0], (Artist) entity[1],
                (Category) entity[2], (Resume) entity[3], getFilesByArtId(((Art) entity[0]).getArtId())));

        log.info("---------------------------");
        log.info(pageRequestDTO.toString());

        Page<Object[]> result = artRepository.searchPage(pageRequestDTO.getType(), pageRequestDTO.getKeyword(),
                pageRequestDTO.getPageable(Sort.by("artId").descending()));

        return new PageResultDto<>(result, fn);

    }

    @Transactional
    @Override
    public ArtDTO get(Long artId) {

        log.info("get() : " + artId);
        List<Object[]> result = artRepository.getArtByArtId(artId);

        log.info("result : " + Arrays.toString(result.get(0)));

        List<ArtFile> artFileList = new ArrayList<>();

        result.forEach(arr -> artFileList.add((ArtFile) arr[4]));

        log.info("artFileList: " + artFileList);

        return entityToDto((Art) result.get(0)[0], (Artist) result.get(0)[1], (Category) result.get(0)[2],
                (Resume) result.get(0)[3], artFileList);

    }

    @Override
    public List<ArtFile> getFilesByArtId(Long artId) {

        return artFileRepository.getFilesByArtId(artId);

    }

    @Transactional
    @Override
    public Long delete(Long artId) {

        // 파일 부터 삭제
        artFileRepository.deleteByArtId(artId);

        artRepository.deleteById(artId);

        return artRepository.findById(artId).isPresent() ? 0L : 1L;

    }

    @Transactional
    @Override
    public Long modify(ArtDTO artDTO) {

        Art art = artRepository.getOne(artDTO.getArtId());

        System.out.println(art);

        art.changeTitle(artDTO.getTitle());
        art.changeDescription(artDTO.getDescription());

        artRepository.save(art);

        List<ArtFileDTO> artFileDtos = artDTO.getFiles();

        if (artFileDtos != null && artFileDtos.size() > 0) {
            artFileDtos.forEach(artFileDTO -> {
                Long fileId = artFileRepository.findByUuid(artFileDTO.getUuid());

                ArtFile artFile = dtoToEntityFiles(artFileDTO);

                if (fileId != null) { // 존재하는 파일이면
                    artFile.setFileId(fileId);
                }

                artFile.setArt(art);

                log.info("ArtFile: " + artFile);

                artFileRepository.save(artFile);
            });
        }

        return art.getArtId();

    }

}