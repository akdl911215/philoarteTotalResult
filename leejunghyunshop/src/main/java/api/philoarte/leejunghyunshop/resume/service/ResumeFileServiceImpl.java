package api.philoarte.leejunghyunshop.resume.service;

import api.philoarte.leejunghyunshop.resume.domain.ResumeFile;
import api.philoarte.leejunghyunshop.resume.domain.ResumeFileDto;
import api.philoarte.leejunghyunshop.resume.repository.ResumeFileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class ResumeFileServiceImpl implements ResumeFileService {
    @Value("${shop.upload.path}")
    private String uploadPath;
    private final ResumeFileRepository repo;

    @Override
    public List<ResumeFileDto> uploadFile(List<MultipartFile> uploadFiles) {

        List<ResumeFileDto> resultDtoList = new ArrayList<>();
        for (MultipartFile uploadFile : uploadFiles) {
            String originalName = uploadFile.getOriginalFilename();
            String fileName = originalName.substring(originalName.lastIndexOf("\\") + 1);
            log.info("fileName: " + fileName);
            String uuid = UUID.randomUUID().toString();
            String saveName = uploadPath + File.separator + uuid + "_" + fileName;
            Path savePath = Paths.get(saveName);

            try {
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + File.separator + "s_" + uuid + "_" + fileName;
                Thumbnails.of(new File(saveName)).size(800, 450).toFile(thumbnailSaveName);
                Thumbnails.of(new File(saveName)).scale(1)
                        .watermark(Positions.BOTTOM_CENTER,
                                ImageIO.read(new File(uploadPath + File.separator + "watermark.png")), 0.5f)
                        .toFile(new File(uploadPath + File.separator + "w_" + uuid + "_" + fileName));
                ResumeFileDto resumeFileDto = ResumeFileDto.builder().uuid(uuid).fname(fileName).build();
                resultDtoList.add(resumeFileDto);
            }

            catch (IOException e) {
                e.printStackTrace();
            }
        }

        return resultDtoList;
    }

    @Override
    public void removeFiles(Long resumeId) {
        List<ResumeFile> fileList = repo.getAllForRemove(resumeId);
        for (ResumeFile fileLists : fileList) {
            File f = new File(uploadPath + File.separator + fileLists.getUuid() + "_" + fileLists.getFname());
            File sf = new File(uploadPath + File.separator + "s_" + fileLists.getUuid() + "_" + fileLists.getFname());
            File wf = new File(uploadPath + File.separator + "w_" + fileLists.getUuid() + "_" + fileLists.getFname());
            System.out.println("deleteFile: " + f.exists());
            if (f.exists()) {
                f.delete();
                sf.delete();
                wf.delete();
            }
        }
    }
}