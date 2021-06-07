package api.philoarte.leejunghyunshop.review.repository.searchRepository;

import api.philoarte.leejunghyunshop.review.domain.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SearchReviewRepository {
    Review search();
    Page<Object[]> searchPage(String type, String keyword, Pageable pageable);
}
