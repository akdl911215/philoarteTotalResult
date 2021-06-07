package api.philoarte.leejunghyunshop.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistService;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.artist.service.artistTestService.PageRequestService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;

@SpringBootTest
public class ArtistServiceTests {

    @Autowired
    private ArtistService sv;
    private PageRequestService pageRequestService;

    @Test
    @Transactional
    @Commit
    public void testSearch(){

        PageRequestDto pageRequestDTO = PageRequestDto.builder()
                .page(1)
                .size(10)
                .type("un") // 검색 조건 t, c, w, tc, tcw ...
                .keyword("ni") // 검색 키워드
                .build();

        PageResultDto<ArtistDto, Artist> resultDTO = sv.getPageList(pageRequestDTO);

        System.out.println("PREV: " + resultDTO.isPrev());
        System.out.println("NEXT: " + resultDTO.isNext());
        System.out.println("TOTAL: " + resultDTO.getTotalPage());

        System.out.println("-------------------------------------");
        for (ArtistDto artistDto : resultDTO.getDtoList()){
            System.out.println(artistDto);
        }

        System.out.println("--------------------------------------");
        resultDTO.getPageList().forEach(i -> System.out.println(i));
    }

    @Test
    public void testRegister() {
        ArtistDto artistDto = ArtistDto.builder()
                .artistId(1L)
                .username("abcd")
                .password("1234")
                .name("Leejunghyun")
                .address("seoul")
                .phoneNumber("010503902993")
                .school("bit")
                .department("comp")
                .build();

        System.out.println("=======================");
        System.out.println("변환작업 ===============");
        System.out.println("::::::::::::::" + sv.register(artistDto));
    }

    @Test
    public void signup() {
        ArtistDto artistDto = ArtistDto.builder()
                .username("abcd")
                .password("1234")
                .name("Leejunghyun")
                .address("seoul")
                .phoneNumber("010503902993")
                .school("bit")
                .department("comp")
                .build();

        System.out.println("=======================");
        System.out.println("변환작업 ===============");
        System.out.println("::::::::::::::" + sv.register(artistDto));
    }

    @Transactional
    @Commit
    @Test
    public void testList(){
        PageRequestDto pageRequestDto = PageRequestDto
                                        .builder()
                                        .page(1)
                                        .size(10)
                                        .type("unepad")
                                        .keyword("인물")
                                        .build();

        PageResultDto<ArtistDto, Artist> resultDto = sv.getPageList(pageRequestDto);

        System.out.println("PREV : " + resultDto.isPrev());
        System.out.println("NEXT : " + resultDto.isNext());
        System.out.println("TOTAL : " + resultDto.getTotalPage());
        System.out.println("=====================================");
        for (ArtistDto artistDto : resultDto.getDtoList()) {
            System.out.println(artistDto);
        }
        System.out.println("======================================");
        resultDto.getPageList().forEach(i -> System.out.println(i));
    }


}
