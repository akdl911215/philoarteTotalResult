package api.philoarte.leejunghyunshop.review.repository;

import api.philoarte.leejunghyunshop.review.domain.Reply;
import api.philoarte.leejunghyunshop.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    @Query("SELECT a from Reply a ORDER BY a.rno DESC")
    List<Reply> replyFindAll();

    @Modifying
    @Query("UPDATE Reply a SET a.text = :text WHERE a.rno = :rno")
    int replyUpdate(@Param("rno") Long rno, @Param("text") String text);

    // 리뷰 삭제시 댓글 삭제
    @Modifying
    @Query("DELETE FROM Reply rp WHERE rp.review.reviewId = :reviewId")
    void replyDelete(@Param("reviewId") Long reviewId);

    List<Reply> getRepliesByReviewOrderByRegDateDesc(Review review);
}
