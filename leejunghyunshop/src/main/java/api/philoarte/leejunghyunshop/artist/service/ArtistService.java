package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


public interface ArtistService {

    ArtistDto signin(ArtistDto artistDto);
    List<Artist> getAllData();
    List<Artist> findAll();
    void deleteById(Long artistId);
    ArtistDto updateById(ArtistDto artistDto);
    ArtistDto updateMypage(ArtistDto artistDto);

    PageResultDto<ArtistDto, Artist> getPageList(PageRequestDto requestDto);

    Long register(ArtistDto artistDto);
    Map<String, String> signup(ArtistDto artistDto);

    default ArtistFileDto EntityToDtoArtistFile(ArtistFile artistFile) {

        ArtistFileDto artistFileDto = ArtistFileDto.builder()
                                        .artistFileId(artistFile.getArtistFileId())
                                        .uuid(artistFile.getUuid())
                                        .imgName(artistFile.getImgName())
                                        .path(artistFile.getPath())
                                        .build();

        return artistFileDto;
    }

    default ArtistFile dtoToEntityArtistFile(ArtistFileDto artistFileDto) {

        ArtistFile artistFile = ArtistFile.builder()
                                .artistFileId(artistFileDto.getArtistFileId())
                                .uuid(artistFileDto.getUuid())
                                .imgName(artistFileDto.getImgName())
                                .path(artistFileDto.getPath())
                                .build();

        return artistFile;
    }

    default Map<String, Object> dtoToEntity(ArtistDto artistDto){
        Map<String, Object> entityMap = new HashMap<>();
        Artist artist = Artist.builder()
                        .artistId(artistDto.getArtistId())
                        .username(artistDto.getUsername())
                        .password(artistDto.getPassword())
                        .name(artistDto.getName())
                        .email(artistDto.getEmail())
                        .phoneNumber(artistDto.getPhoneNumber())
                        .address(artistDto.getAddress())
                        .school(artistDto.getSchool())
                        .department(artistDto.getDepartment())

                        .build();
        entityMap.put("artist", artist);

        List<ArtistFileDto> fileDtoList = artistDto.getArtistFileDtoList();
        if (fileDtoList != null && fileDtoList.size() > 0) {
            List<ArtistFile> artistFileList = fileDtoList.stream().map(artistFileDto -> {
                ArtistFile artistFile = ArtistFile.builder()
                                        .artistFileId(artistFileDto.getArtistFileId())
                                        .path(artistFileDto.getPath())
                                        .imgName(artistFileDto.getImgName())
                                        .uuid(artistFileDto.getUuid())
                                        .artist(artist)
                                        .build();
                return artistFile;
            }).collect(Collectors.toList());
            entityMap.put("fileList", artistFileList);
        }
        return entityMap;
    }

    default ArtistDto entityToDto(Artist artist, List<ArtistFile> artistFiles) {
        ArtistDto artistDto = ArtistDto.builder()
                            .artistId(artist.getArtistId())
                            .username(artist.getUsername())
                            .name(artist.getName())
                            .email(artist.getEmail())
                            .phoneNumber(artist.getPhoneNumber())
                            .address(artist.getAddress())
                            .school(artist.getSchool())
                            .department(artist.getDepartment())
                            .build();

        if(artistFiles != null && artistFiles.size() > 0) {
            System.out.println("size : " +artistFiles.size());
            List<ArtistFileDto> artistFileDtoList = artistFiles.stream().map(artistFile -> {

                if(artistFile == null) {
                    return null;
                }
                return ArtistFileDto.builder()
                        .artistFileId(artistFile.getArtistFileId())
                        .imgName(artistFile.getImgName())
                        .path(artistFile.getPath())
                        .uuid(artistFile.getUuid())
                        .build();
            }).collect(Collectors.toList());
            artistDto.setArtistFileDtoList(artistDto.getArtistFileDtoList());
        }

        return artistDto;
    }

    default Artist dtoEntity(ArtistDto artistDto){
        Artist entity = Artist.builder()
                .artistId(artistDto.getArtistId())
                .username(artistDto.getUsername())
                .password(artistDto.getPassword())
                .name(artistDto.getName())
                .email(artistDto.getEmail())
                .phoneNumber(artistDto.getPhoneNumber())
                .address(artistDto.getAddress())
                .school(artistDto.getSchool())
                .department(artistDto.getDepartment())
                .build();

        return entity;

    }
    
    default ArtistDto entityDto(Artist artist) {
        ArtistDto entityDto = ArtistDto.builder()
                .artistId(artist.getArtistId())
                .username(artist.getUsername())
                .password(artist.getPassword())
                .name(artist.getName())
                .email(artist.getEmail())
                .phoneNumber(artist.getPhoneNumber())
                .address(artist.getAddress())
                .school(artist.getSchool())
                .department(artist.getDepartment())
                .build();

        return entityDto;

    }
}
