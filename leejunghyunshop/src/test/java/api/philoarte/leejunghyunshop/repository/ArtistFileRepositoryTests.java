package api.philoarte.leejunghyunshop.repository;

import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.artist.repository.fileRepository.ArtistFileRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;

@SpringBootTest
@Log4j2
public class ArtistFileRepositoryTests {

    @Autowired
    private ArtistFileRepository artistFileRepository;

    @Test
    @Transactional
    @Commit
    public void find() {
        Long artistFileID = artistFileRepository.findByArtistId(28L);
        System.out.println(artistFileID);
    }
}
