package api.philoarte.leejunghyunshop.review.controller;

import api.philoarte.leejunghyunshop.review.domain.dto.ReplyDto;
import api.philoarte.leejunghyunshop.review.service.ReplyServiceImpl;
import api.philoarte.leejunghyunshop.review.service.ReviewFileServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import java.util.UUID;

@Log4j2
@RestController
@RequestMapping("/replies")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Api(tags = "replies")
public class ReplyController {

    private final ReplyServiceImpl service;
    private final ReviewFileServiceImpl fileService;

    @Value("${shop.upload.path}")
    private String uploadPath;

    @PostMapping("/register")
    @ApiOperation(value = "리뷰 댓글 등록", notes = "리뷰 댓글을 등록 합니다.")
    public ResponseEntity<String> replySave(ReplyDto replyDto) {
        log.info(replyDto);

        for (MultipartFile file : replyDto.getReplyFiles()) {
            String uuid = UUID.randomUUID().toString();
            String fileName = file.getOriginalFilename();
            String saveName = uploadPath + File.separator + uuid + "_" + file.getOriginalFilename();
            String thumbnailSaveName = uploadPath + File.separator + uuid + "s_" + file.getOriginalFilename();
            try {
                FileCopyUtils.copy(file.getInputStream(),
                        new FileOutputStream(saveName, Boolean.parseBoolean(thumbnailSaveName)));
                Thumbnails.of(new File(saveName)).size(250, 250).outputFormat("jpg").toFile(thumbnailSaveName);
                replyDto.setImgName(fileName);
                replyDto.setUuid(uuid);
                replyDto.setPath(uploadPath);
                replyDto.setReviewId(replyDto.getReviewId());
                replyDto.setRno(replyDto.getRno());
                replyDto.setText(replyDto.getText());
                replyDto.setReplyFiles(replyDto.getReplyFiles());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        service.save(replyDto);
        return ResponseEntity.ok("success");
    }

    @GetMapping(value = "/list/{reviewId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "댓글 목록", notes = "댓글 목록을 보여줍니다.")
    public ResponseEntity<List<ReplyDto>> replyList(@PathVariable("reviewId") Long reviewId) {

        log.info("reviewId : " + reviewId);
        return ResponseEntity.ok(service.getList(reviewId));
    }

    @PutMapping("/modify/{rno}")
    @ApiOperation(value = "하나의 리뷰 댓글 수정", notes = "하나의 리뷰 댓글을 수정 합니다.")
    public ResponseEntity<String> replyModify(ReplyDto replyDto) {
        log.info(replyDto);
        for (MultipartFile file : replyDto.getReplyFiles()) {
            String uuid = UUID.randomUUID().toString();
            String fileName = file.getOriginalFilename();
            String saveName = uploadPath + File.separator + uuid + "_" + file.getOriginalFilename();
            String thumbnailSaveName = uploadPath + File.separator + uuid + "s_" + file.getOriginalFilename();
            try {
                FileCopyUtils.copy(file.getInputStream(),
                        new FileOutputStream(saveName, Boolean.parseBoolean(thumbnailSaveName)));
                Thumbnails.of(new File(saveName)).size(250, 250).outputFormat("jpg").toFile(thumbnailSaveName);
                replyDto.setImgName(fileName);
                replyDto.setUuid(uuid);
                replyDto.setPath(uploadPath);
                replyDto.setReviewId(replyDto.getReviewId());
                replyDto.setRno(replyDto.getRno());
                replyDto.setText(replyDto.getText());
                replyDto.setReplyFiles(replyDto.getReplyFiles());
                replyDto.setRno(replyDto.getRno());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        service.modify(replyDto);
        return ResponseEntity.ok("Success Modify");
    }

    @DeleteMapping("/remove/{rno}")
    @ApiOperation(value = "하나의 리뷰 댓글 삭제", notes = "하나의 리뷰 댓글을 삭제 합니다.")
    public ResponseEntity<String> replyRemove(@PathVariable("rno") Long rno) {
        service.remove(rno);
        return ResponseEntity.ok("delete success!!");
    }
}