package api.philoarte.leejunghyunshop.resume.domain;

import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResumeDto {

    private Long resumeId;
    private String title;
    private String selfIntroduce;
    private String detail;
    private Long artistId;
    private String username;
    private String name;
    private Long categoryId;
    private String categoryName;

    private List<ResumeFileDto> resumeFiles;

    public static ResumeDto of(Resume resume) {
        ResumeDto resumeDto = ModelMapperUtils.getModelMapper().map(resume, ResumeDto.class);
        return resumeDto;
    }

}