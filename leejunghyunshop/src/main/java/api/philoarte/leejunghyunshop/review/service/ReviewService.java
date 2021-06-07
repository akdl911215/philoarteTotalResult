package api.philoarte.leejunghyunshop.review.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.review.domain.Review;
import api.philoarte.leejunghyunshop.review.domain.ReviewFile;
import api.philoarte.leejunghyunshop.review.domain.dto.ReviewDto;
import api.philoarte.leejunghyunshop.review.domain.dto.ReviewFileDto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public interface ReviewService {
    Long save(ReviewDto reviewDto);
    ReviewDto get(Long reviewId);
    void modify(ReviewDto reviewDto);
    void removeWithReplies(Long reviewId);
    PageResultDto<ReviewDto, Object[]> getList(PageRequestDto pageRequestDto);

    default Map<String, Object> dtoToEntity(ReviewDto reviewDto){
        Map<String, Object> entityMap = new HashMap<>();
        Artist artist = Artist.builder()
                            .artistId(reviewDto.getWriterId())
                            .build();
        Review review = Review.builder()
                            .reviewId(reviewDto.getReviewId())
                            .title(reviewDto.getTitle())
                            .content(reviewDto.getContent())
                            .artist(artist)
                            .build();
        entityMap.put("review", review);

        List<ReviewFileDto> fileDtoList = reviewDto.getReviewFileDtoList();
        if (fileDtoList != null && fileDtoList.size() > 0){
            List<ReviewFile> reviewFileList = fileDtoList.stream().map(reviewFileDto -> {
                ReviewFile reviewFile = ReviewFile.builder()
                        .reviewFileId(reviewFileDto.getReviewFileId())
                        .path(reviewFileDto.getPath())
                        .imgName(reviewFileDto.getImgName())
                        .uuid(reviewFileDto.getUuid())
                        .review(review)
                        .build();
                return reviewFile;
            }).collect(Collectors.toList());
            entityMap.put("fileList", reviewFileList);
        }
        return entityMap;
    }

    default ReviewDto entityToDto(Review review, Artist artist, Long replyCount, List<ReviewFile> reviewFiles){
        ReviewDto reviewDto = ReviewDto.builder()
                                .reviewId(review.getReviewId())
                                .title(review.getTitle())
                                .content(review.getContent())
                                .regDate(review.getRegDate())
                                .modDate(review.getModDate())
                                .writerId(artist == null ? 1L : artist.getArtistId())
                                .writerName(artist == null ? "" : artist.getName())
                                .replyCount(replyCount.intValue())
                                .build();
        if (reviewFiles != null && reviewFiles.size() > 0) {
            System.out.println("size : " + reviewFiles.size());
            List<ReviewFileDto> reviewFileDtoList = reviewFiles.stream().map(reviewFile -> {
                if (reviewFile == null){
                    return null;
                }
                return ReviewFileDto.builder()
                        .reviewFileId(reviewFile.getReviewFileId())
                        .imgName(reviewFile.getImgName())
                        .path(reviewFile.getPath())
                        .uuid(reviewFile.getUuid())
                        .build();
            }).collect(Collectors.toList());
            reviewDto.setReviewFileDtoList(reviewFileDtoList);
        }
        reviewDto.setReplyCount(replyCount.intValue());
        return reviewDto;
    }

}
