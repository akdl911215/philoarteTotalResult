package api.philoarte.leejunghyunshop.resume.repository.searchRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SearchResumeRepository {

    Page<Object[]> searchPage(String type, String keyword, Pageable pageable);

}