package api.philoarte.leejunghyunshop.art.domain;

import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.category.domain.CategoryDto;
import api.philoarte.leejunghyunshop.resume.domain.ResumeDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArtDTO {

    // Art
    private Long artId;

    private String title;

    private String description;

    private String mainImg;

    private LocalDateTime regDate;

    // Artist
    private ArtistDto artist;

    // Category
    private CategoryDto category;

    // Resume
    private ResumeDto resume;

    // ArtFile
    private List<ArtFileDTO> files;

}