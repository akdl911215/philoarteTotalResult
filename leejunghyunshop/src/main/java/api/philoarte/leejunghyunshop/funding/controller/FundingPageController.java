package api.philoarte.leejunghyunshop.funding.controller;

import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.funding.domain.Funding;
import api.philoarte.leejunghyunshop.funding.domain.FundingDto;
import api.philoarte.leejunghyunshop.funding.domain.FundingPageDto;
import api.philoarte.leejunghyunshop.funding.service.FundingServiceImpl;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Api(tags = "funding")
@RequestMapping("/funding")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FundingPageController {
    private final FundingServiceImpl service;

    @GetMapping("/list")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> list(int page) {

        return ResponseEntity.ok(service.getList(page));
    }

    @GetMapping("/list/{fundingId}")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> getByFundingId(PageRequestDto requestDto,
                                                                              @PathVariable("fundingId") Long fundingId) {
        return ResponseEntity.ok(service.getPageById(requestDto, fundingId));
    }

    @GetMapping("/list/artistfunding/{artistId}")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> getByArtistId(PageRequestDto requestDto,
                                                                             @PathVariable("artistId") Long artistId) {
        return ResponseEntity.ok(service.getPageByArtistId(requestDto, artistId));
    }

    @GetMapping("/list/search")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> searchTCInPage(PageRequestDto requestDto,
                                                                              @RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(service.searchTitleAndContent(requestDto, keyword));
    }

    @GetMapping("/list/artist")
    public ResponseEntity<FundingPageDto<FundingDto, Funding>> searchArtistName(PageRequestDto requestDto,
                                                                                @RequestParam("artistName") String artistName) {
        return ResponseEntity.ok(service.getByartistName(requestDto, artistName));
    }

    // @GetMapping("/listpage/searchsum")
    // public ResponseEntity<Page<FundingDto>>
    // searchTCInPage(@RequestParam("keyword") String keyword, Pageable pageable){
    // return ResponseEntity.ok(service.searchTitleAndContent(pageable, keyword));
    // }

}