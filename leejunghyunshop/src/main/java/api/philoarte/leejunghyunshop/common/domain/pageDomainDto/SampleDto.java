package api.philoarte.leejunghyunshop.common.domain.pageDomainDto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true) // builder 패턴으로 생성된 객체의 일부 값을 변경한 새로운 객체를 생성
public class SampleDto {

    private Long sno;
    private String first;
    private String last;
    private LocalDateTime regTime;
}
