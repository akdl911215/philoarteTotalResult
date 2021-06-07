package api.philoarte.leejunghyunshop.review.service;

import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import api.philoarte.leejunghyunshop.review.domain.ReviewFile;
import api.philoarte.leejunghyunshop.review.domain.dto.ReviewFileDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

public interface ReviewFileService {
    ArrayList<ReviewFileDto> saveFile(List<MultipartFile> uploadFile);
    void reviewFileDelete(Long reviewFileId);

    default ReviewFile dtoToEntity(ReviewFileDto reviewFileDto){
        ReviewFile reviewFile = ModelMapperUtils.getModelMapper().map(reviewFileDto, ReviewFile.class);

        return reviewFile;
    }

    default ReviewFileDto entityToDto(ReviewFile reviewFile){
        ReviewFileDto reviewFileDto = ModelMapperUtils.getModelMapper().map(reviewFile, ReviewFileDto.class);

        return reviewFileDto;
    }
}
