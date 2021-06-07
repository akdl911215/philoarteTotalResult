package api.philoarte.leejunghyunshop.review.service;

import api.philoarte.leejunghyunshop.review.domain.Reply;
import api.philoarte.leejunghyunshop.review.domain.Review;
import api.philoarte.leejunghyunshop.review.domain.dto.ReplyDto;

import java.util.List;

public interface ReplyService {
    Long save(ReplyDto replyDto);
    void remove(Long rno);
    void modify(ReplyDto replyDto);
    List<ReplyDto> getList(Long reviewId);

    default Reply dtoToEntity(ReplyDto replyDto) {
        Review review = Review.builder().reviewId(replyDto.getReviewId()).build();

        Reply reply = Reply.builder()
                        .rno(replyDto.getRno())
                        .text(replyDto.getText())
                        .replyer(replyDto.getReplyer())
                        .uuid(replyDto.getUuid())
                        .imageName(replyDto.getImgName())
                        .path(replyDto.getPath())
                        .review(review)
                        .build();
        return reply;
    }

    default ReplyDto entityToDto(Reply reply) {
        ReplyDto replyDto = ReplyDto.builder()
                                .rno(reply.getRno())
                                .text(reply.getText())
                                .reviewId(reply.getReview().getReviewId())
                                .replyer(reply.getReplyer())
                                .regDate(reply.getRegDate())
                                .modDate(reply.getModDate())
                                .build();
        return replyDto;
    }

}
