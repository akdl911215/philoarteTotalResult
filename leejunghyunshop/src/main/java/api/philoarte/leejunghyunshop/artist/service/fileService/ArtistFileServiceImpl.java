package api.philoarte.leejunghyunshop.artist.service.fileService;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.QArtist;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.artist.repository.fileRepository.ArtistFileRepository;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.transaction.Transactional;
import java.io.File;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.function.Function;

@Transactional
@Log4j2
@Service
@RequiredArgsConstructor
public class ArtistFileServiceImpl implements ArtistFilerService {

    private final ArtistFileRepository aritstFileRepository;
    private final ArtistRepository artistRepository;

    @Value("${shop.upload.path}")
    private String uploadPath;

    @Transactional
    @Override
    public ArrayList<ArtistFileDto> saveFile(List<MultipartFile> uploadFiles) {
        ArrayList<ArtistFileDto> ArtistFileResultList = new ArrayList<>();

        log.info("File ServiceImpl saveFile 시작");
        for (MultipartFile uploadFile : uploadFiles) {
            log.info("uploadFile : "+ uploadFile);
            String ofName = uploadFile.getOriginalFilename();
            log.info("ofName : "+ ofName);
            int index = ofName.lastIndexOf(".");
            String ofHeader = ofName.substring(0, index);
            String ext = ofName.substring(index);
            String uuid = UUID.randomUUID().toString();
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(uploadPath).append(File.separator).append(uuid).append("_").append(ofHeader).append(ext);
            String saveName = stringBuilder.toString();
            log.info("Artist File upload Name : "+ saveName);
            Path savePath = Paths.get(saveName);
            log.info("savePath : "+ savePath);

            try {
                log.info("ArtistFileServiceImpl Try");
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + File.separator + "s_" + uuid + ofName;
                Thumbnails.of(new File(saveName)).size(100, 100).outputFormat("jpg").toFile(thumbnailSaveName);

                Thumbnails.of(new File(saveName)).scale(1)
                        .watermark(Positions.BOTTOM_CENTER, ImageIO.read(new File(uploadPath + File.separator + "warterMark.png")), 0.5f)
                        .toFile(new File(uploadPath + File.separator + "w+" + uuid + "_" + ofName));

                ArtistFileDto artistFileDto = ArtistFileDto.builder()
                                                .uuid(uuid)
                                                .imgName(ofName)
                                                .build();

                ArtistFileResultList.add(artistFileDto);
                log.info(ArtistFileResultList);
            }catch (Exception e) {
                e.printStackTrace();
            }

        }

        return ArtistFileResultList;

    }

    @Override
    public void artistFileDelete(Long artistFileId) {
        aritstFileRepository.artistFileDelete(artistFileId);
    }


    private BooleanBuilder getSearch(PageRequestDto requestDto) {
        String type = requestDto.getType();
        BooleanBuilder booleanBuilder = new BooleanBuilder();
        QArtist qArtist = QArtist.artist;
        String keyword = requestDto.getKeyword();
        BooleanExpression expression = qArtist.artistId.gt(0L); // artist > 0 조건만 생성
        booleanBuilder.and(expression);

        if(type == null || type.trim().length() == 0){ // 검색 조건이 없는 경우
            return booleanBuilder;
        }

        // 검색 조건 작성
        BooleanBuilder conditionBuilder = new BooleanBuilder();

        if(type.contains("u")){
            conditionBuilder.or(qArtist.username.contains(keyword));
        }
        if (type.contains("n")){
            conditionBuilder.or(qArtist.name.contains(keyword));
        }
        if (type.contains("e")){
            conditionBuilder.or(qArtist.email.contains(keyword));
        }
        if (type.contains("s")){
            conditionBuilder.or(qArtist.school.contains(keyword));
        }
        if (type.contains("d")){
            conditionBuilder.or(qArtist.department.contains(keyword));
        }

        // 모든 조건 통합
        booleanBuilder.and(conditionBuilder);

        return booleanBuilder;
    }

    @Override
    public PageResultDto<ArtistDto, Artist> getPageFileList(PageRequestDto requestDto) { // PageRequestFileDto로하면 안됨? 왜지?
        log.info("File ServiceImpl getPageFileList 시작");

        log.info("requestDto :::: " + requestDto);
        Pageable pageable = requestDto.getPageable(Sort.by("artistId").descending());
        log.info("pageable ::: " + pageable);

        requestDto.setPageFileDto(aritstFileRepository.findAll());
        log.info("드디어 들어가나요?");
        log.info("requestDto :::::::: " + requestDto);

        BooleanBuilder booleanBuilder = getSearch(requestDto); // 검색 조건 처리
        log.info("booleanBuilder ::: " + booleanBuilder);
        Page<Artist> result = artistRepository.findAll(booleanBuilder, pageable); //Querydsl 사용
        log.info("result ::: " + result);
        Function<Artist, ArtistDto> fn = (entity -> entityDto(entity));
        log.info("fn :::: " + fn);


//        Optional<ArtistDto> artistDto = aritstFileRepository.findById(artistFileIdSetting);
//        Optional<ArtistFile> fileListResult = aritstFileRepository.findById(artistFileIdSetting);
//        fileListResult.get().getArtistFileId();
//        String uuid = fileListResult.get().getUuid();
//        String imgName = fileListResult.get().getImgName();

        log.info("return result :::::: " + result);
        return new PageResultDto<>(result, fn);
    }


}
