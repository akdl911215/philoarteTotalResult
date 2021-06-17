package api.philoarte.leejunghyunshop.resume.service;


import java.util.List;

import api.philoarte.leejunghyunshop.resume.domain.ResumeFileDto;
import org.springframework.web.multipart.MultipartFile;



public interface ResumeFileService {

    List<ResumeFileDto> uploadFile(List<MultipartFile> uploadFiles);

    void removeFiles(Long resumeId);
}