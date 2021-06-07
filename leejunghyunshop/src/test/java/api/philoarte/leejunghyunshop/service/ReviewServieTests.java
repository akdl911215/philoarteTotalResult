package api.philoarte.leejunghyunshop.service;

import api.philoarte.leejunghyunshop.review.domain.dto.ReviewDto;
import api.philoarte.leejunghyunshop.review.service.ReviewService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;

@SpringBootTest
public class ReviewServieTests {

    @Autowired
    private ReviewService reviewService;

    @Test
    @Commit
    @Transactional
    public void testRegister() {

//        ReviewDto dto = ReviewDto.builder()
//                        .title("Test.")
//                        .content("Test...")
//                        .writerEmail("user55@aaa.com")
    }
}
