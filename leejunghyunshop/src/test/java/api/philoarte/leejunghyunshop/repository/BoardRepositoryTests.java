package api.philoarte.leejunghyunshop.repository;

import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;


@SpringBootTest
@Log4j2
public class BoardRepositoryTests {

    @Autowired
    private ArtistRepository repository;

    @Test
    @Commit
    @Transactional
    public void testSearch1() {

//        repository.search1();
    }

    @Test
    @Commit
    @Transactional
    public void testSearchPage() {

        Pageable pageable = PageRequest.of(0,10,
                                Sort.by("artistId").descending()
                                    .and(Sort.by("username").ascending()));

//        Page<Object[]> result = repository.searchPage("t","1", pageable);
    }
}
