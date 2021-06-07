package api.philoarte.leejunghyunshop.like.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "likes_record")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like_id")
    private long likeId;
    @Column(name = "like_value")
    private Boolean likeValue;
}