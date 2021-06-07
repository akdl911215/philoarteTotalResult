package api.philoarte.leejunghyunshop.review.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.review.domain.Review;
import api.philoarte.leejunghyunshop.review.domain.ReviewFile;
import api.philoarte.leejunghyunshop.review.domain.dto.ReviewDto;
import api.philoarte.leejunghyunshop.review.repository.ReplyRepository;
import api.philoarte.leejunghyunshop.review.repository.ReviewFileRepository;
import api.philoarte.leejunghyunshop.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

@Log4j2
@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final ReviewFileRepository reviewFileRepository;
    private final ReplyRepository replayRepository;

    @Override
    public Long save(ReviewDto reviewDto) {
        Map<String, Object> entityMap = dtoToEntity(reviewDto);
        Review review = (Review) entityMap.get("review");
        List<ReviewFile> reviewFileList = (List<ReviewFile>) entityMap.get("fileList");

        reviewRepository.save(review);

        if(reviewFileList != null && reviewFileList.size() > 0){
            reviewFileList.forEach(reviewFile -> {
                reviewFileRepository.save(reviewFile);
            });
        }
        return review.getReviewId();
    }

    @Override
    public ReviewDto get(Long reviewId) {
        List<Object[]> result = reviewRepository.getReviewWithReply(reviewId);
        Review review = (Review) result.get(0)[0];
        Artist artist = (Artist) result.get(0)[1];

        List<ReviewFile> reviewFileList = new ArrayList<>();
        Long replyCount = (Long) result.get(0)[2];
        result.forEach(arr -> {
            ReviewFile reviewFile = (ReviewFile) arr[3];
            reviewFileList.add(reviewFile);
        });
        return entityToDto(review, artist, replyCount, reviewFileList);
    }

    @Transactional
    @Override
    public void modify(ReviewDto reviewDto) {
        Map<String, Object> entityMap = dtoToEntity(reviewDto);
        Review review = reviewRepository.getOne(reviewDto.getReviewId());
        review.changeTitle(reviewDto.getTitle());
        review.changeContent(reviewDto.getContent());

        reviewRepository.save(review);

        if(entityMap.get("filelist") != null && ((List<ReviewFile>)entityMap.get("fileList")).size() > 0){
            List<ReviewFile> reviewFileList = (List<ReviewFile>) entityMap.get("fileList");
            reviewFileList.forEach(reviewFile -> {
                reviewFileRepository.save(reviewFile);
            });
        }
    }

    @Transactional
    @Override
    public void removeWithReplies(Long reviewId) {
        reviewFileRepository.reviewFileDelete(reviewId);
        replayRepository.replyDelete(reviewId);
        reviewRepository.reviewDelete(reviewId);
    }

    @Override
    public PageResultDto<ReviewDto, Object[]> getList(PageRequestDto pageRequestDto) {
        log.info("pageRequestDto", pageRequestDto);

        Function<Object[], ReviewDto> fn = (arr -> entityToDto(
                (Review) arr[0],
                (Artist) arr[1],
                (Long) arr[2],
                (List<ReviewFile>) (Arrays.asList((ReviewFile) arr[3]))
        ));


        System.out.println("============================");
        System.out.println(pageRequestDto.toString());
        log.info("reviewRepository : ", reviewRepository);
        log.info("reviewRepository.searchPage : ", reviewRepository.searchPage(
                pageRequestDto.getType(),
                pageRequestDto.getKeyword(),
                pageRequestDto.getPageable(Sort.by("reviewId").descending())
        ));

        Page<Object[]> result = reviewRepository.searchPage(

                pageRequestDto.getType(),
                pageRequestDto.getKeyword(),
                pageRequestDto.getPageable(Sort.by("reviewId").descending())
        );

        log.info("result : " , result);

        log.info("찍히나요? ㅋ");
        return new PageResultDto<>(result, fn);
    }
}
