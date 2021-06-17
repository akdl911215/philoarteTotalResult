package api.philoarte.leejunghyunshop.artist.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@ToString(exclude = "artists")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "artist_file")
public class ArtistFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artist_file_id")
    private Long artistFileId;
    @Column(name = "uuid")
    private String uuid;
    @Column(name = "img_name")
    private String imgName;

    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id")
    private Artist artist;


}
