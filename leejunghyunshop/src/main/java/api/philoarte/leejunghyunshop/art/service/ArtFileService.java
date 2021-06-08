package api.philoarte.leejunghyunshop.art.service;

import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.art.domain.ArtFile;
import api.philoarte.leejunghyunshop.art.domain.ArtFileDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ArtFileService {
    List<ArtFileDTO> uploadFiles(List<MultipartFile> files);

    List<ArtFileDTO> updateFiles(List<MultipartFile> files);

    Long deleteFiles(ArtFileDTO artFileDTO);

    default ArtFile dtoToEntity(ArtFileDTO artFileDTO) {
        return ArtFile.builder().uuid(artFileDTO.getUuid()).originalFileName(artFileDTO.getOriginalFileName())
                .savedFileName(artFileDTO.getSavedFileName())
                .art(Art.builder().artId(artFileDTO.getArt().getArtId()).build()).build();
    }
}