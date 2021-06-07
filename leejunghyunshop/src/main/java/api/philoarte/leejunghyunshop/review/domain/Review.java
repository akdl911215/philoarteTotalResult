package api.philoarte.leejunghyunshop.review.domain;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.common.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reviews")
@ToString(exclude = {"artist, art"})
public class Review extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;

    private String title;

    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public void changeTitle(String title){
        this.title =title;
    }
    public void changeContent(String content){
        this.content=content;
    }
}