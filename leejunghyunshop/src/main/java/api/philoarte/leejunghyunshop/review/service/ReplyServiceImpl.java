package api.philoarte.leejunghyunshop.review.service;

import api.philoarte.leejunghyunshop.review.domain.Reply;
import api.philoarte.leejunghyunshop.review.domain.Review;
import api.philoarte.leejunghyunshop.review.domain.dto.ReplyDto;
import api.philoarte.leejunghyunshop.review.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReplyServiceImpl implements ReplyService {

    private final ReplyRepository repository;

    @Transactional
    @Override
    public Long save(ReplyDto replyDto) {
        Reply reply = dtoToEntity(replyDto);
        repository.save(reply);

        return replyDto.getRno();
    }

    @Override
    public void remove(Long rno) {
        repository.deleteById(rno);
    }

    @Override
    public void modify(ReplyDto replyDto) {
        Reply reply = dtoToEntity(replyDto);
        repository.save(reply);
    }

    @Override
    public List<ReplyDto> getList(Long reviewId) {
        List<Reply> result = repository.getRepliesByReviewOrderByRegDateDesc(Review.builder().reviewId(reviewId).build());

        return result.stream().map(reply -> entityToDto(reply)).collect(Collectors.toList());
    }
}
