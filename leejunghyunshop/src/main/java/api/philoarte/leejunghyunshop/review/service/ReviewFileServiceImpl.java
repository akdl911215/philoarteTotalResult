package api.philoarte.leejunghyunshop.review.service;


import api.philoarte.leejunghyunshop.review.domain.dto.ReviewFileDto;
import api.philoarte.leejunghyunshop.review.repository.ReviewFileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.transaction.Transactional;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class ReviewFileServiceImpl implements ReviewFileService {

    private final ReviewFileRepository repository;

    @Value("${philo.arte.upload.path}")
    private String uploadPath;

    @Transactional
    @Override
    public ArrayList<ReviewFileDto> saveFile(List<MultipartFile> uploadFiles) {
        ArrayList<ReviewFileDto> reviewFileDtoResultList = new ArrayList<>();

        for (MultipartFile uploadFile : uploadFiles) {
            String ofName = uploadFile.getOriginalFilename();
            int index = ofName.lastIndexOf(".");
            String ofHeader = ofName.substring(0, index);
            String ext = ofName.substring(index);
            String uuid = UUID.randomUUID().toString();
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(uploadPath).append(File.separator).append(uuid).append("_").append(ofHeader).append(ext);
            String saveName = stringBuilder.toString();

            log.info("Review File Upload Name : ", saveName);
            Path savePath = Paths.get(saveName); // Paths.get : get의 매개값은 파일의 경로
            try {
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + File.separator + "s_" + uuid + "+" + ofName;

                Thumbnails.of(new File(saveName)).size(100, 100).outputFormat("jpg").toFile(thumbnailSaveName);
                Thumbnails.of(new File(saveName)).scale(1)
                        .watermark(Positions.BOTTOM_CENTER, ImageIO.read(new File(uploadPath + File.separator + "84432_320.jpg")), 0.5f)
                        .toFile(new File(uploadPath + File.separator + "w_" + uuid + "_" + ofName));

                ReviewFileDto reviewFileDto = ReviewFileDto.builder().uuid(uuid).imgName(ofName).build();
                reviewFileDtoResultList.add(reviewFileDto);

            } catch(Exception e) {
                e.printStackTrace();
            }
        }

        return reviewFileDtoResultList;
    }

    @Override
    public void reviewFileDelete(Long reviewFileId) {
        repository.reviewFileDelete(reviewFileId);
    }
}