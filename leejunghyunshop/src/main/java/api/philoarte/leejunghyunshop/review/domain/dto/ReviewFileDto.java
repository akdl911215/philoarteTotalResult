package api.philoarte.leejunghyunshop.review.domain.dto;

import api.philoarte.leejunghyunshop.review.domain.Review;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewFileDto {

    private Long reviewFileId;
    private String uuid;
    private String imgName;
    private String path;
    private Review review;

}