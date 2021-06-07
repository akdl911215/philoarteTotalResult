package api.philoarte.leejunghyunshop.review.controller;

import api.philoarte.leejunghyunshop.review.domain.dto.ReplyDto;
import api.philoarte.leejunghyunshop.review.service.ReplyServiceImpl;
import api.philoarte.leejunghyunshop.review.service.ReviewFileServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@Log4j2
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Api(tags = "replies")
@RequestMapping("/replies")
public class ReplyController {

    private final ReplyServiceImpl service;
    private final ReviewFileServiceImpl fileService;

    @Value("${philo.arte.upload.path}")
    private String uploadPath;

    @PostMapping("/register")
    @ApiOperation(value = "리뷰 댓글 등록", notes = "리뷰 댓글을 등록합니다")
    public ResponseEntity<String> replySave(ReplyDto replyDto){
        log.info(replyDto);

        for (MultipartFile file : replyDto.getFiles()) {
            System.out.println("file" + file);

            String fileName = file.getOriginalFilename();
            replyDto.setImgName(fileName);
            replyDto.setUuid(UUID.randomUUID().toString());
            replyDto.setPath(uploadPath);
            replyDto.setFiles(replyDto.getFiles());
        }
        service.save(replyDto);

        return ResponseEntity.ok("Success");
    }

    @GetMapping(value = "/list/{reviewId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "댓글 목록", notes = "댓글 목록을 보여줍니다")
    public ResponseEntity<List<ReplyDto>> replyList(@PathVariable("reviewId") Long reviewId){
        log.info("reviewId : " , reviewId);

        return ResponseEntity.ok(service.getList(reviewId));
    }

    @PutMapping("/modify/{rno}")
    @ApiOperation(value = "한개의 리뷰 댓글 수정", notes = "한개의 리뷰 댓글을 수정합니다")
    public ResponseEntity<String> replyModify(ReplyDto replyDto){
        log.info("replyDto : ", replyDto);

        for (MultipartFile file : replyDto.getFiles()) {
            System.out.println("file" + file);
            String fileName = file.getOriginalFilename();
            replyDto.setImgName(fileName);
            replyDto.setUuid(UUID.randomUUID().toString());
        }
        service.modify(replyDto);

        return ResponseEntity.ok("Success Modify");
    }

    @DeleteMapping("/remove/{rno}")
    @ApiOperation(value = "한개의 리뷰 댓글 삭제", notes = "한개의 리뷰 댓글을 삭제합니다")
    public ResponseEntity<String> replyRemove(@PathVariable("rno") Long rno) {
        service.remove(rno);

        return ResponseEntity.ok("Delete Seucces");
    }
}
