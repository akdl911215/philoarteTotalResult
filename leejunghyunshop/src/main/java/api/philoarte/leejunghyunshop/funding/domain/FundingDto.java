package api.philoarte.leejunghyunshop.funding.domain;

import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FundingDto {
    private Long fundingId;
    private String title;
    private String content;
    private long goalPrice;
    private long viewCnt;
    private String hashtag;
    private long artistId;
    private String name;

    private List<FundingFileDto> fundingFiles;

    // Entity -> Dto
    public static FundingDto toDto(Funding funding) {
        return ModelMapperUtils.getModelMapper().map(funding, FundingDto.class);
    }

    // Entity -> Dto(Page)
    public static Page<FundingDto> toDtoPage(Page<Funding> sourcePage) {
        return sourcePage.map(FundingDto::toDto);
    }

    public static FundingDto toDtoList(List<Funding> sendIt) {
        return ModelMapperUtils.getModelMapper().map(sendIt, FundingDto.class);
    }

    public static List<FundingDto> tlist(List<Funding> sendIt) {
        return sendIt.stream().map(f -> ModelMapperUtils.getModelMapper().map(f, FundingDto.class))
                .collect(Collectors.toList());
    }

}
