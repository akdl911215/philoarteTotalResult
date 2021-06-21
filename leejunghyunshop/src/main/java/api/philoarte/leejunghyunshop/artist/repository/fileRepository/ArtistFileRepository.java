package api.philoarte.leejunghyunshop.artist.repository.fileRepository;

import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface ArtistFileRepository extends JpaRepository<ArtistFile, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM ArtistFile rf WHERE rf.artist.artistId = :artistId")
    void artistFileDelete(@Param("artistId") Long artistId);

    @Transactional
    @EntityGraph(attributePaths = "artist")
    @Query("SELECT af FROM ArtistFile af WHERE af.artist.artistId = :artistId")
    Long findByArtistId(@Param("artistId") Long artistId);
}
