package api.philoarte.leejunghyunshop.art.controller;

import api.philoarte.leejunghyunshop.art.domain.ArtFileDTO;
import api.philoarte.leejunghyunshop.art.service.ArtFileServiceImpl;
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
import java.util.List;

@Log4j2
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/art_files")
public class ArtFileController {

    private final ArtFileServiceImpl artFileService;

    @Value("${shop.upload.path}")
    private String uploadPath;

    @PostMapping("/upload")
    public ResponseEntity<List<ArtFileDTO>> uploadFiles(List<MultipartFile> files) {

        for (MultipartFile file : files) {
            if (!file.getContentType().startsWith("image")) {
                log.warn("이미지 파일이 아닙니다.");

                return new ResponseEntity<>(HttpStatus.FORBIDDEN);
            }
        }

        return new ResponseEntity<>(artFileService.uploadFiles(files), HttpStatus.OK);

    }

    @GetMapping("/display")
    public ResponseEntity<byte[]> getFiles(String fileName) {

        try {
            String srcFileName = URLDecoder.decode(fileName, "UTF-8");
            log.info("fileName: " + srcFileName);

            File file = new File(uploadPath + File.separator + srcFileName);
            log.info("file: " + file);

            HttpHeaders httpHeaders = new HttpHeaders();

            // MIME 타입 처리
            httpHeaders.add("Content-Type", Files.probeContentType(file.toPath()));

            log.info("httpHeaders: " + httpHeaders);

            // 파일 데이터 처리
            return new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), httpHeaders, HttpStatus.OK);

        } catch (Exception e) {
            log.error(e.getMessage());

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/update/{fileId}")
    public ResponseEntity<List<ArtFileDTO>> updateFiles(List<MultipartFile> files) {

        return new ResponseEntity<>(artFileService.updateFiles(files), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteFiles(@RequestBody String uuid) {
        log.info(uuid);
        // return new ResponseEntity<>(artFileService.deleteFiles(artFileDTO),
        // HttpStatus.OK);
        return null;
    }

}