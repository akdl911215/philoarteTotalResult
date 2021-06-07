package api.philoarte.leejunghyunshop.review.repository;

import api.philoarte.leejunghyunshop.review.domain.Review;
import api.philoarte.leejunghyunshop.review.repository.searchRepository.SearchReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long>, SearchReviewRepository{

    @Transactional
    @Modifying
    @Query("Update Review a set a.title = :title, a.content = :content where a.reviewId = :reviewId ")
    int reviewUpdate(@Param("reviewId") Long reviewId, @Param("title") String title, @Param("content") String content);

    @Transactional
    @Modifying
    @Query("DELETE FROM Review a where a.reviewId = :reviewId")
    void reviewDelete(@Param("reviewId") Long reviewId);


    @Query("SELECT re, w FROM Review re LEFT JOIN re.artist w where re.reviewId =:reviewId")
    Object getRevieWithWriter(@Param("reviewId") Long reviewId);

    // 특정 리뷰와 해당 리뷰에 속한 댓글 조회
    @Query("SELECT re, w, count(rp), rf " +
            " FROM Review re LEFT JOIN re.artist w" +
            " LEFT OUTER JOIN Reply rp ON rp.review = re " +
            " LEFT OUTER JOIN ReviewFile rf on rf.review =re "
            + " where re.reviewId = :reviewId group by rf ")
    List<Object[]> getReviewWithReply(@Param("reviewId") Long reviewId);


    // 리뷰 조회 쿼리
    @Query(" SELECT re, w, count(rp) " +
            " FROM Review re LEFT JOIN re.artist w " +
            " LEFT OUTER JOIN Reply rp ON rp.review =re" +
            " where re.reviewId = :reviewId")
    Object getReviewByReviewId(@Param("reviewId") Long reviewId);

    // w.artistId(화면 목록)
    @Query(value = " SELECT re, w, count(distinct rp), rf " +
            " FROM Review re " +
            " LEFT JOIN re.artist w "
            + " LEFT OUTER JOIN Reply rp ON rp.review= re"
            + " LEFT OUTER JOIN ReviewFile rf on rf.review = re " +
            " GROUP BY re ",
            countQuery = "SELECT count(re) FROM Review re")
    Page<Object[]> getReviewWithReplyCount(Pageable pageable);

}
