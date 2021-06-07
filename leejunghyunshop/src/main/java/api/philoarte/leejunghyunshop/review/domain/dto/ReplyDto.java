package api.philoarte.leejunghyunshop.review.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Component
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class ReplyDto {

    private Long rno;

    private String text;
    private String replyer;

    private Long reviewId;

    private LocalDateTime regDate, modDate;

    //댓글 파일 업로드
    private String uuid;
    private String imgName;
    private String path;

//    private Review review;
    @Builder.Default
    private ArrayList<MultipartFile> files = new ArrayList<>();

}
