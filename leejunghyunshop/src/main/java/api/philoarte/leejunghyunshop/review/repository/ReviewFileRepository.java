package api.philoarte.leejunghyunshop.review.repository;

import api.philoarte.leejunghyunshop.review.domain.ReviewFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;


public interface ReviewFileRepository extends JpaRepository<ReviewFile, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM ReviewFile rf where rf.review.reviewId = :reviewId")
    void reviewFileDelete(@Param("reviewId") Long reviewId);
}
