package api.philoarte.leejunghyunshop.artist.repository;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long>,
                        QuerydslPredicateExecutor<Artist> {



    @Transactional
    @Modifying
    @Query("DELETE FROM Artist ar WHERE ar.artistId = :artistId")
    void artistDelete(@Param("artistId") Long artistId);



    boolean existsByUsername(@Param("username")String username);
    Optional<Artist> findByUsername(String username);

    @EntityGraph(attributePaths = {"roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("select a from Artist a order by a.artistId desc")
    List<Artist> getAllData();

    @Query(value = "select * from artists where username=:username and password=:password", nativeQuery = true)
    Artist signin(@Param("username") String username, @Param("password")String password);



//    @Modifying
//    @Transactional
//    @Query("UPDATE Artist a SET a.username = :username WHERE a.artistId = :artistId")
//    Long ArtistWithrawal(@Param("artistId") Long artistId, @Param("username") String username);


}
