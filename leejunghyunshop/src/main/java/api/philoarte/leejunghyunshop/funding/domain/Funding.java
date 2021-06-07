package api.philoarte.leejunghyunshop.funding.domain;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "fundings")
public class Funding {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "funding_id")
    private Long fundingId;
    @Column(name = "title")
    private String title;
    @Column(name = "content")
    private String content;
    @Column(name = "goal_price")
    private String goalPrice;
    @Column(name = "view_cnt")
    private String viewCnt;
    @Column(name = "hashtag")
    private String hashtag;

//    @ManyToOne
//    @JoinColumn(name = "artist_id")
//    private Artist artist;

}