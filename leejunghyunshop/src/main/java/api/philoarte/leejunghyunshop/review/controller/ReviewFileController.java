package api.philoarte.leejunghyunshop.review.controller;

import api.philoarte.leejunghyunshop.review.domain.dto.ReviewFileDto;
import api.philoarte.leejunghyunshop.review.service.ReviewFileServiceImpl;
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

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/review_files")
@CrossOrigin(origins = "*")
public class ReviewFileController {

    private final ReviewFileServiceImpl service;

    @PostMapping("/upload_file")
    public ResponseEntity<List<ReviewFileDto>> uploadFile(List<MultipartFile> files) {
        for (MultipartFile file : files) {
            System.out.println("file" + file);
            if (!file.getContentType().startsWith("image")) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }
        }
        return ResponseEntity.ok(service.saveFile(files));
    }

    @Value("${shop.upload.path}")
    private String uploadPath;

    @GetMapping("/display")
    public ResponseEntity<byte[]> getFile(String imgName) {
        ResponseEntity<byte[]> result = null;
        try {
            String srcFileName = URLDecoder.decode(imgName, "UTF-8");
            log.info("imgName :" + srcFileName);
            File file = new File(uploadPath + File.separator + srcFileName);
            log.info("file : " + file);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", Files.probeContentType(file.toPath()));
            result = ResponseEntity.ok().headers(headers).body(FileCopyUtils.copyToByteArray(file));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return result;
    }

    @PutMapping("/update_file/{reviewFileId")
    public ResponseEntity<ArrayList<ReviewFileDto>> updateFile(List<MultipartFile> files) {
        return ResponseEntity.ok(service.saveFile(files));
    }

    @DeleteMapping("/delete_file/{reviewFileId}")
    public ResponseEntity<String> deleteFile(@PathVariable("reviewFileId") Long reviewFileId) {

        service.reviewFileDelete(reviewFileId);

        return ResponseEntity.ok("delete success");
    }
}
