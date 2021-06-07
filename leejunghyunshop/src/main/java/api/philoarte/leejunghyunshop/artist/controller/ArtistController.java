package api.philoarte.leejunghyunshop.artist.controller;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.artist.service.fileService.ArtistFileServiceImpl;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistServiceImpl;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = "artists")
@RequiredArgsConstructor
@Log4j2
@RequestMapping(value = "/artists", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
public class ArtistController {

    private final ArtistServiceImpl service;
    private final ArtistFileServiceImpl artistFileService;

    @Value("${leejunghyunshop.philoarte.upload.path}")
    private String uploadPath;

    @GetMapping("/list/pages")
    public ResponseEntity<PageResultDto<ArtistDto, Object[]>> list(PageRequestDto page) {
        log.info("=======================================");
        log.info("=======================================");
        log.info("page................." + page);
//        log.info("model................." + model);
//        model.addAttribute("result", service.getPageList(page));
//        return null;
//        log.info("result" + service.getPageList(page));
        return new ResponseEntity(service.getPageList(page), HttpStatus.OK);
    }

    @PostMapping("/signup")
    @ApiOperation(value = "회원가입 등록", notes = "회원 정보를 등록 합니다")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Artist - Username is alredy in use")})
    public ResponseEntity<Map<String, String>> signup
            (ArtistDto artistDto) throws IOException {
        log.info("Controller 시작");
        log.info("회원가입을 시작해볼까요 ??? ㅋㅋ");
        log.info("artistDto :::::::::: " + artistDto);
        log.info("artistDto.getFiles() :::: " + artistDto.getFiles());
        ArrayList<MultipartFile> files = artistDto.getFiles();
        log.info("files ::::::::: " + files);
        files.forEach(file -> {
            log.info("file.getOriginalFilename() : "+ file.getOriginalFilename());

            String uuid = UUID.randomUUID().toString();
            log.info("uuid :::::::: " + uuid);
            String saveName = uploadPath + File.separator + uuid + "_" + file.getOriginalFilename();
            String thumbnailSaveName = uploadPath + File.separator + uuid + "s_" + file.getOriginalFilename();
            log.info("saveName : "+ saveName);
            log.info("thumbnailSaveName : "+ thumbnailSaveName);

            try {
                log.info("try 안에있어요");
                FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(saveName, Boolean.parseBoolean(thumbnailSaveName)));
                Thumbnails.of(new File(saveName)).size(100, 100).outputFormat("jpg").toFile(thumbnailSaveName);

                ArtistFileDto fileDto = ArtistFileDto.builder()
                        .uuid(uuid)
                        .imgName(file.getOriginalFilename())
                        .path(uploadPath)
                        .build();

                artistDto.addArtistFileDto(fileDto);
                log.info("artistDto ::::: " + artistDto);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        log.info("회원가입이 되었습니다. 축!! :: "+ artistDto);
//        log.info("controller service.signup(artistDto) :: " + service.signup(artistDto));
//        service.signup(artistDto);


        Map<String, String> resultMap = new HashMap<>();
        return new ResponseEntity(service.signup(artistDto), HttpStatus.OK);

    }


    @PostMapping("/signin")
    @ApiOperation(value = "${ArtistController.signin}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Somthing went wrong"),
            @ApiResponse(code = 422, message = "Invalid Artist-Username / Password supplied")})
    public ResponseEntity<ArtistDto> signin
            (@ApiParam("Signin Artist") @RequestBody ArtistDto artistDto) throws IOException {
        log.info("==============================================");
        log.info("==============================================");
        log.info("Artist Signin(로그인) start :::::::::: " + artistDto);
        log.info("==============================================");
        log.info("==============================================");
//        service.signin(artistDto);
        return ResponseEntity.ok(service.signin(artistDto));
//        return null;
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Artist>> findAll() {
        return ResponseEntity.ok(service.getAllData());
    }

//    @GetMapping("/list")
//    public void list(PageRequestDto pageRequestDto, Model model) {
//        log.info("list................." + pageRequestDto);
//        model.addAttribute("result", service.getPageList(pageRequestDto));
//    }

//    @GetMapping("/fetchOne/{artistId}")
//    public Optional<Artist> findById
//            (@PathVariable("artistId") Long artistId) {
//        System.out.println("회원정보 1개를 불러옵니다 ::::::::::");
//        return service.findById(artistId);
//    }

    @GetMapping("/fetchOne/{artistId}")
    public ResponseEntity<Optional<Artist>> findById
            (@PathVariable("artistId") Long artistId) {
        System.out.println("회원정보 1개를 불러옵니다 ::::::::::");
        return ResponseEntity.ok(service.findById(artistId));
    }

    @PutMapping("/update/{artistId}")
    public ResponseEntity<ArtistDto> updateById
            (@PathVariable("artistId") Long artistId,
             @RequestBody ArtistDto artist) {
        System.out.println("회원정보 1개를 수정합니다 :::::::::::");
        artist.setArtistId(artistId);
        return ResponseEntity.ok(service.updateById(artist));
    }

    @PutMapping("/mypage")
    public ResponseEntity<String> updateMypage
            (@RequestBody ArtistDto artistDto) {
        System.out.println("회원정보 1개를 수정합니다 :::::::::::");
        service.updateMypage(artistDto);
        return ResponseEntity.ok("Success Mypage");
    }

    @DeleteMapping("/delete")
    @ApiOperation(value = "${ArtistController.delete}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Username is alredy in use")})
    public void deleteById
            (@RequestBody ArtistDto artistDto) {
        System.out.println("삭제를 시작합니다 :::: ");
        System.out.println("artistDto :::::::: " + artistDto);
        Long artistId = artistDto.getArtistId();
        log.info("ArtistId ::::: " + artistId);
        service.deleteById(artistId);
    }

//    @GetMapping("/all")
//    public ResponseEntity<List<ArtistDto>> all() {
//        log.info("로그인 하지 않은 사용자도 접근 가능한 URI");
//        return ResponseEntity.ok(null);
//    }
//
//
//    @PostMapping("/{username}")
//    public ResponseEntity<?> auth(@PathVariable String username) {
//        log.info("로그인한 사용자만 접근 가능한 URI");
//        return ResponseEntity.ok(null);
//    }
//
//    @PostMapping("/admin")
//    public ResponseEntity<?> admin() {
//        log.info("관리자만 접근 가능한 URI");
//        return ResponseEntity.ok(null);
//    }

}

