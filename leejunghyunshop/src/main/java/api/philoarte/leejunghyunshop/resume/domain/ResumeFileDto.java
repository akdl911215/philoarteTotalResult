package api.philoarte.leejunghyunshop.resume.domain;

import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResumeFileDto {

    private Long resumeFileId;
    private String uuid;
    private String fname;
    private Boolean repImg;
    private String fileTitle;
    private String fileDetail;
    private String fileWorkedDate;

    public static ResumeFileDto of(ResumeFile resumeFile) {
        ResumeFileDto resumeFileDto = ModelMapperUtils.getModelMapper().map(resumeFile, ResumeFileDto.class);
        return resumeFileDto;
    }

}