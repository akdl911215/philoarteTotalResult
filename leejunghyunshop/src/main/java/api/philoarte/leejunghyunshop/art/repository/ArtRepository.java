package api.philoarte.leejunghyunshop.art.repository;

import api.philoarte.leejunghyunshop.art.domain.Art;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ArtRepository extends JpaRepository<Art, Long>, SearchArtRepository {



    @Query("SELECT a, a.artist, a.category, a.resume, f FROM Art a LEFT JOIN ArtFile f ON f.art = a WHERE a.artId = :artId")
    List<Object[]> getArtByArtId(@Param("artId") Long artId);

    @Query("SELECT a, a.artist, a.category, a.resume FROM Art a")
    Page<Object[]> getArts(Pageable pageable);

    @EntityGraph(attributePaths = { "artist", "category", "resume" }, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT a, a.artist, a.category, a.resume FROM Art a ORDER BY a.artId DESC")
    List<Object[]> getArtsTest(Pageable pageable);



}