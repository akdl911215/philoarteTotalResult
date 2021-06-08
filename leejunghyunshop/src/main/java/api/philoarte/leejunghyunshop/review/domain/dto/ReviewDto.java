package api.philoarte.leejunghyunshop.review.domain.dto;

import lombok.*;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReviewDto {

    private Long reviewId;
    private String title;
    private String content;
    private Long writerId;
    private String writerName;
    private int replyCount;
    private boolean fileSelect;
    private LocalDateTime regDate;
    private LocalDateTime modDate;

    @Builder.Default
    private ArrayList<MultipartFile> files = new ArrayList<>();

    @Builder.Default
    private List<ReviewFileDto> reviewFileDtoList = new ArrayList<>();

    public void addReviewFileDto(ReviewFileDto reviewFileDto){
        reviewFileDtoList.add(reviewFileDto);
    }

}
