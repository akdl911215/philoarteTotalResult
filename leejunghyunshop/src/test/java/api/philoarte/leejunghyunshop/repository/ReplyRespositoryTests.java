package api.philoarte.leejunghyunshop.repository;

import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.review.domain.Reply;
import api.philoarte.leejunghyunshop.review.domain.Review;
import api.philoarte.leejunghyunshop.review.repository.ReplyRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
class ReplyRepositoryTests {

    @Autowired
    private ReplyRepository replyRepository;

    @Autowired
    private ArtistRepository artistRepository;

    @Test
    public void insertReply(){
        IntStream.rangeClosed(1,30).forEach(i->{
            long reviewId = (long)(Math.random()*20) +1;


            Review review = Review.builder().reviewId(reviewId).build();

            Reply reply =Reply.builder()
                    .text("댓글"+i)
                    .review(review)
                    .replyer("댓글 쓴사람" + i)
                    .build();

            replyRepository.save(reply);
        });

    }

    @Test
    @Transactional
    public void readReply1(){
        Optional<Reply> result = replyRepository.findById(10L);

        Reply reply = result.get();

        System.out.println(reply);
        System.out.println(reply.getReview());
    }

    @Test
    public void testGetReviewReplies(){
        Review review = Review.builder().reviewId(6L).build();

        List<Reply> result = replyRepository.getRepliesByReviewOrderByRegDateDesc(review);
//        List<Reply> result = replyRepository.getRepliesByReviewOrderByRegDateAsc(review);

        result.forEach(reviewReply->{
            System.out.println(reviewReply.getRno());
            System.out.println("\t"+reviewReply.getText());
            System.out.println("\t"+reviewReply.getReview().getReviewId());
        });
    }


}