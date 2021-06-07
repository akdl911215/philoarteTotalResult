package api.philoarte.leejunghyunshop.workFile.domain;

import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.category.domain.Category;
import api.philoarte.leejunghyunshop.resume.domain.Resume;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "work_files")
@NoArgsConstructor
@Data
public class WorkFile {
    @Id
    @GeneratedValue
    @Column(name = "uuid")
    private UUID uuid;
    @Column(name = "ofile_name")
    private String ofileName;
    @Column(name = "rep_img")
    private String repImg;

//    @ManyToOne
//    @JoinColumn(name = "art_id")
//    private Art art;

}