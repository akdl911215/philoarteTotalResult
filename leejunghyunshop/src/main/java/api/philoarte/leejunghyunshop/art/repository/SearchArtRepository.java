package api.philoarte.leejunghyunshop.art.repository;

import api.philoarte.leejunghyunshop.art.domain.Art;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SearchArtRepository {

    Art search();

    Page<Object[]> searchPage(String type, String keyword, Pageable pageable);

}
