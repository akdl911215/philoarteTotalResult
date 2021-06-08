package api.philoarte.leejunghyunshop.art.controller;

import api.philoarte.leejunghyunshop.art.domain.ArtDTO;
import api.philoarte.leejunghyunshop.art.service.ArtServiceImpl;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/arts")
public class ArtController {

    private final ArtServiceImpl artService;

    @GetMapping("/list")
    public ResponseEntity<PageResultDto<ArtDTO, Object[]>> list(PageRequestDto pageRequestDTO) {
        System.out.println("list() : " + pageRequestDTO);

        return ResponseEntity.ok(artService.getList(pageRequestDTO));
    }

    @GetMapping("/search")
    public ResponseEntity<PageResultDto<ArtDTO, Object[]>> search(PageRequestDto pageRequestDTO) {
        System.out.println("search() : " + pageRequestDTO);

        return ResponseEntity.ok(artService.getSearch(pageRequestDTO));
    }

    @PostMapping("/register")
    public ResponseEntity<Long> register(@RequestBody ArtDTO artDTO) {
        System.out.println("register() : " + artDTO);

        return ResponseEntity.ok(artService.register(artDTO));
    }

    @GetMapping("/read/{artId}")
    public ResponseEntity<ArtDTO> read(@PathVariable("artId") Long artId) {
        System.out.println("read() : " + artId);
        System.out.println("결과 : " + artService.get(artId));

        return ResponseEntity.ok(artService.get(artId));
    }

    @PutMapping("/modify")
    public ResponseEntity<Long> modify(@RequestBody ArtDTO artDTO) {
        System.out.println("modify() : " + artDTO);

        return ResponseEntity.ok(artService.modify(artDTO));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Long> delete(@RequestBody ArtDTO artDTO) {
        System.out.println("delete() : " + artDTO);

        return ResponseEntity.ok(artService.delete(artDTO.getArtId()));
    }

}