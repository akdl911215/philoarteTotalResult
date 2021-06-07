package api.philoarte.leejunghyunshop.common.domain.pageDomainDto;

import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;


@Builder
@AllArgsConstructor
@Data
public class PageRequestDto<Dto, EN> {

    private int page;
    private int size;
    private String type;
    private String keyword;

    private List<ArtistFileDto> pageFileDto;


    public PageRequestDto(){
        this.page = 1;
        this.size = 10;
    }

    public Pageable getPageable(Sort sort){

        return PageRequest.of(page -1, size, sort);
    }
}
