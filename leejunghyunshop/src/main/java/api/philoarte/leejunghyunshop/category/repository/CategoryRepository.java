package api.philoarte.leejunghyunshop.category.repository;

import api.philoarte.leejunghyunshop.category.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
