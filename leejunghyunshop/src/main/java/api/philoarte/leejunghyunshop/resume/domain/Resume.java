package api.philoarte.leejunghyunshop.resume.domain;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.category.domain.Category;
import api.philoarte.leejunghyunshop.common.domain.BaseEntity;

import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "resumes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class Resume extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "resume_id")
    private Long resumeId;
    @Column(name = "title")
    private String title;
    @Column(name = "self_introduce", columnDefinition = "LONGTEXT")
    private String selfIntroduce;
    @Column(name = "detail", columnDefinition = "LONGTEXT")
    private String detail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id")
    private Artist artist;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @JsonManagedReference
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    List<ResumeFile> resumeFiles = new ArrayList<>();

    public void changeTitle(String title) {
        this.title = title;
    }

    public static Resume of(ResumeDto resumeDto) {
        Resume resume = ModelMapperUtils.getModelMapper().map(resumeDto, Resume.class);
        return resume;
    }

    public void saveAll(ResumeDto resumeDto) {
        this.resumeId = resumeDto.getResumeId();
        this.title = resumeDto.getTitle();
        this.selfIntroduce = resumeDto.getSelfIntroduce();
        this.detail = resumeDto.getDetail();
        this.artist = Artist.builder().artistId(resumeDto.getArtistId()).username(resumeDto.getUsername())
                .name(resumeDto.getName()).build();
        this.category = Category.builder().categoryId(resumeDto.getCategoryId())
                .categoryName(resumeDto.getCategoryName()).build();

    }

}