package api.philoarte.leejunghyunshop.art.service;

import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.art.domain.ArtDTO;
import api.philoarte.leejunghyunshop.art.domain.ArtFile;
import api.philoarte.leejunghyunshop.art.domain.ArtFileDTO;
import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.category.domain.Category;
import api.philoarte.leejunghyunshop.category.domain.CategoryDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.resume.domain.Resume;
import api.philoarte.leejunghyunshop.resume.domain.ResumeDto;

import java.util.List;
import java.util.stream.Collectors;

public interface ArtService {
    Long register(ArtDTO artDTO);

    PageResultDto<ArtDTO, Object[]> getList(PageRequestDto pageRequestDTO); // 목록 처리

    PageResultDto<ArtDTO, Object[]> getSearch(PageRequestDto pageRequestDTO);

    ArtDTO get(Long artId);

    List<ArtFile> getFilesByArtId(Long artId);

    Long delete(Long artId);

    Long modify(ArtDTO artDTO);

    default Art dtoToEntity(ArtDTO artDTO) {
        return Art.builder().title(artDTO.getTitle()).description(artDTO.getDescription())
                .mainImg(artDTO.getMainImg())
                .artist(Artist.builder().artistId(artDTO.getArtist().getArtistId()).build())
                .category(Category.builder().categoryId(artDTO.getCategory().getCategoryId()).build())
                .resume(Resume.builder().resumeId(artDTO.getResume().getResumeId()).build()).build();
    }

    default ArtDTO entityToDto(Art art, Artist artist, Category category, Resume resume,
                               List<ArtFile> artFileList) {
        return ArtDTO.builder().artId(art.getArtId()).title(art.getTitle()).description(art.getDescription())
                .mainImg(art.getMainImg()).regDate(art.getRegDate())
                .artist(ArtistDto.builder().artistId(artist.getArtistId())
                        .username(artist.getUsername()).name(artist.getName()).build())
                .category(CategoryDto.builder().categoryId(category.getCategoryId())
                        .categoryName(category.getCategoryName()).build())
                .resume(ResumeDto.builder().resumeId(resume.getResumeId()).build())
                .files(artFileList.stream().map(this::entityToDtoFiles).collect(Collectors.toList()))
                .build();
    }

    default ArtDTO entityToDtoForList(Art art, Artist artist, Category category, Resume resume) {
        return ArtDTO.builder().artId(art.getArtId()).title(art.getTitle()).description(art.getDescription())
                .mainImg(art.getMainImg())
                .artist(ArtistDto.builder().artistId(artist.getArtistId())
                        .username(artist.getUsername()).name(artist.getName()).build())
                .category(CategoryDto.builder().categoryId(category.getCategoryId())
                        .categoryName(category.getCategoryName()).build())
                .resume(ResumeDto.builder().resumeId(resume.getResumeId()).build()).build();
    }

    default ArtFile dtoToEntityFiles(ArtFileDTO artFileDTO) {
        return ArtFile.builder().uuid(artFileDTO.getUuid()).originalFileName(artFileDTO.getOriginalFileName())
                .savedFileName(artFileDTO.getUuid() + "_" + artFileDTO.getOriginalFileName())
                .workedDate(artFileDTO.getWorkedDate()).repImg(artFileDTO.getRepImg()).build();
    }

    default ArtFileDTO entityToDtoFiles(ArtFile artFile) {
        return ArtFileDTO.builder().fileId(artFile.getFileId()).uuid(artFile.getUuid())
                .originalFileName(artFile.getOriginalFileName())
                .savedFileName(artFile.getSavedFileName()).workedDate(artFile.getWorkedDate())
                .repImg(artFile.getRepImg())
                .art(ArtDTO.builder().artId(artFile.getArt().getArtId()).build()).build();
    }
}