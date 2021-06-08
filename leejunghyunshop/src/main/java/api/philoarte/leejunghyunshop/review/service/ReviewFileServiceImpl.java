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

    @Value("${shop.upload.path}")
    private String uploadPath;

    @Transactional
    @Override
    public ArrayList<ReviewFileDto> saveFile(List<MultipartFile> uploadFiles) {
        ArrayList<ReviewFileDto> resultDtoList = new ArrayList<>();
        for (MultipartFile uploadFile : uploadFiles) {
            String ofname = uploadFile.getOriginalFilename();
            int idx = ofname.lastIndexOf(".");
            String ofheader = ofname.substring(0, idx);
            String ext = ofname.substring(idx);
            String uuid = UUID.randomUUID().toString();
            StringBuilder sb = new StringBuilder();
            sb.append(uploadPath).append(File.separator).append(uuid).append("_").append(ofheader).append(ext);
            String saveName = sb.toString();
            log.info("Review File Upload Name : " + saveName);
            Path savePath = Paths.get(saveName);
            try {
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + File.separator + "s_" + uuid + "_" + ofname;
                Thumbnails.of(new File(saveName)).size(100, 100).outputFormat("jpg").toFile(thumbnailSaveName);

                Thumbnails.of(new File(saveName)).scale(1)
                        .watermark(Positions.BOTTOM_CENTER,
                                ImageIO.read(new File(uploadPath + File.separator + "84432_320.jpg")), 0.5f)
                        .toFile(new File(uploadPath + File.separator + "w_" + uuid + "_" + ofname));

                ReviewFileDto reviewFileDto = ReviewFileDto.builder().uuid(uuid).imgName(ofname).build();
                resultDtoList.add(reviewFileDto);
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        return resultDtoList;
    }

    @Override
    public void reviewFileDelete(Long reviewFileId) {
        repository.reviewFileDelete(reviewFileId);
    }

}