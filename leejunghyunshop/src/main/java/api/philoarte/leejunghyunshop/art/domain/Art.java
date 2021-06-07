package api.philoarte.leejunghyunshop.art.domain;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.category.domain.Category;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "arts")
@Data
public class Art {
    @Id
    @GeneratedValue
    @Column(name = "art_id")
    private Long workId;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;

//    @ManyToOne
//    @JoinColumn(name = "artist_id")
//    private Artist artist;
//    @ManyToOne
//    @JoinColumn(name = "category_id")
//    private Category category;

}
