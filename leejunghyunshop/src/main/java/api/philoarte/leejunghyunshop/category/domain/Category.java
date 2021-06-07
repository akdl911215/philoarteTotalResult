package api.philoarte.leejunghyunshop.category.domain;

import api.philoarte.leejunghyunshop.resume.domain.Resume;
import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "categories")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private long categoryId;

    @Column(name = "category_name")
    private String categoryName;

}