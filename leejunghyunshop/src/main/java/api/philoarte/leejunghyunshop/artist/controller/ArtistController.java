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

    @Value("${shop.upload.path}")
    private String uploadPath;

    @GetMapping("/list/pages")
    public ResponseEntity<PageResultDto<ArtistDto, Object[]>> list(PageRequestDto page) {
        log.info("page................." + page);

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
        ArrayList<MultipartFile> files = artistDto.getFiles();
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


        Map<String, String> resultMap = new HashMap<>();

        return new ResponseEntity(service.signup(artistDto), HttpStatus.OK);

    }


    @PostMapping("/signin")
    @ApiOperation(value = "로그인", notes = "로그인을 시작 합니다")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Somthing went wrong"),
            @ApiResponse(code = 422, message = "Invalid Artist-Username / Password supplied")})
    public ResponseEntity<ArtistDto> signin
            (@ApiParam("Signin Artist") @RequestBody ArtistDto artistDto) throws IOException {
        log.info("Artist Signin(로그인) start :::::::::: " + artistDto);

        return ResponseEntity.ok(service.signin(artistDto));
    }

    @GetMapping("/findAll")
    @ApiOperation(value = "모든 회원 리스트", notes = "모든 회원 리스트를 가져옵니다.")
    public ResponseEntity<List<Artist>> findAll() {
        return ResponseEntity.ok(service.getAllData());
    }


    @GetMapping("/fetchOne/{artistId}")
    @ApiOperation(value = "단일 회원 정보", notes = "선택한 회원 정보를 가져옵니다.")
    public ResponseEntity<Optional<Artist>> findById
            (@PathVariable("artistId") Long artistId) {
        log.info("회원정보 1개를 가져옵니다.");

        return ResponseEntity.ok(service.findById(artistId));
    }

    @PutMapping("/update/{artistId}")
    @ApiOperation(value = "회원 정보 수정", notes = "선택한 회원 정보를 수정합니다.")
    public ResponseEntity<ArtistDto> updateById
            (@PathVariable("artistId") Long artistId,
             @RequestBody ArtistDto artist) {
        log.info("회원정보 1개를 수정합니다.");
        artist.setArtistId(artistId);

        return ResponseEntity.ok(service.updateById(artist));
    }

    @PutMapping("/mypage")
    @ApiOperation(value = "회원 정보 수정", notes = "선택한 회원 정보를 수정합니다.")
    public ResponseEntity<String> updateMypage
            (@RequestBody ArtistDto artistDto) {
        log.info("회원정보 1개를 수정합니다");
        service.updateMypage(artistDto);

        return ResponseEntity.ok("Success Mypage");
    }

    @DeleteMapping("/delete/{artistId}")
    @ApiOperation(value = "회원 정보 삭제", notes = "선택한 회원 정보를 삭제합니다.")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Username is alredy in use")})
    public ResponseEntity<String> deleteById(@PathVariable("artistId") Long artistId) {
        log.info("삭제를 시작합니다");

        return ResponseEntity.ok("Delete Success!!");
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

}

