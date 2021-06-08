package api.philoarte.leejunghyunshop.artist.repository.fileRepository;

import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.QArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface ArtistFileRepository extends JpaRepository<ArtistFile, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM ArtistFile rf WHERE rf.artist.artistId = :artistId")
    void artistFileDelete(@Param("artistId") Long artistId);

}
