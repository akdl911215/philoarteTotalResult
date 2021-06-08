package api.philoarte.leejunghyunshop.resume.service;

import api.philoarte.leejunghyunshop.resume.domain.ResumeFileDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ResumeFileService {

    List<ResumeFileDto> uploadFile(List<MultipartFile> uploadFiles);

    void removeFiles(Long resumeId);
}