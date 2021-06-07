package api.philoarte.leejunghyunshop.artist.controller.fileController;

import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.artist.service.fileService.ArtistFileServiceImpl;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

@RestController
@Log4j2
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/artist_files" )
public class ArtistFileController {

    private final ArtistFileServiceImpl service;

    @Value("${leejunghyunshop.philoarte.upload.path}")
    private String uploadPath;

    @RequestMapping("/imgList/pages")
    public ResponseEntity<PageResultDto<ArtistDto, Object[]>> list(PageRequestDto page) {
        log.info("imgList page................." + page);

        return new ResponseEntity(service.getPageFileList(page), HttpStatus.OK);
    }

    @PostMapping("/uploadAjax")
    public ResponseEntity<List<ArtistFileDto>> uploadFile(List<MultipartFile> files) {
        log.info("uploadAjax 시작");
        for (MultipartFile file : files) {

            // 이미지 파일만 업로드 가능
            if (!file.getContentType().startsWith("image")){
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }
        }
        return ResponseEntity.ok(service.saveFile(files));
    }

    @GetMapping("/display")
    public ResponseEntity<byte[]> getFile(String imgName) {
        ResponseEntity<byte[]> result = null;
        log.info("display 시작");

        try {
            String srcFileName = URLDecoder.decode(imgName, "UTF-8");
            log.info("imgName : ", srcFileName);

            File file = new File(uploadPath + File.separator + srcFileName);
            log.info("file : ", file);

            HttpHeaders header = new HttpHeaders();

            // MIME타입 처리
            header.add("Content-Type", Files.probeContentType(file.toPath()));
            // 파일 데이터 처리
            result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), header, HttpStatus.OK);

        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("display 끝");
        return result;
    }

    @PutMapping("/update_file/{reviewFileId}")
    public ResponseEntity<ArrayList<ArtistFileDto>> updateFile(List<MultipartFile> files) {

        return ResponseEntity.ok(service.saveFile(files));
    }

    @DeleteMapping("/delete_file/{artistFileId}")
    public ResponseEntity<String> deleteFile(@PathVariable("aritstFileId") Long artistFileId){
        service.artistFileDelete(artistFileId);

        return ResponseEntity.ok("Delete Success");
    }
}
