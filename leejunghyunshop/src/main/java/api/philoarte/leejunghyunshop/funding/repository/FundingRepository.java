package api.philoarte.leejunghyunshop.funding.repository;

import api.philoarte.leejunghyunshop.funding.domain.Funding;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface FundingRepository extends JpaRepository<Funding,Long> {
    @Query("SELECT f FROM Funding f ORDER BY f.fundingId asc")
    List<Funding> getAllFundings();
    @EntityGraph(attributePaths = {"artist", "artist.roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.fundingId = :fundingId")
    ArrayList<Funding> getOneFunding(@Param("fundingId")Long id);

    @Query("SELECT f FROM Funding f WHERE f.title LIKE %:title%")
    List<Funding> searchFundingsByTitle(@Param("title") String titleWord);

    @Query("SELECT f FROM Funding f WHERE f.content LIKE %:index%")
    List<Funding> searchFundingByContent(@Param("index") String contentWord);

    @EntityGraph(attributePaths = {"artist", "artist.roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.hashtag LIKE %:hashtag%")
    List<Funding> searchFundingByHashtag(@Param("hashtag") String hashtagName);


    @Query("SELECT f.fundingFiles FROM Funding f WHERE f.fundingId =:fundingId")
    ArrayList<Funding> colFiles(@Param("fundingId") Long id);

    @EntityGraph(attributePaths = {"artist", "artist.roles"}, type = EntityGraph.EntityGraphType.FETCH)
        // @Query("SELECT f.fundingId, f.title, f.content, f.goalPrice, f.viewCnt, f.hashtag,f.fundingFiles FROM Funding f WHERE f.fundingId = :fundingId")
    Optional<Funding> findById(@Param("fundingId") Long fundingId);


    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.artist.artistId = :artistId ")
    List<Funding> searchAllListByArtistId(@Param("artistId") Long i);

    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f.title,f.goalPrice,f.viewCnt,f.hashtag FROM Funding f WHERE f.artist.artistId = :artistId")
    List<Funding> searchFundingByArtistId(@Param("artistId") Long i);


    @EntityGraph(attributePaths = {"artist","artist.roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f ORDER BY f.fundingId desc")
    Page<Funding> getRecent(Pageable pageable);

    @EntityGraph(attributePaths = {"artist","artist.roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.fundingId = :fundingId")
    Page<Funding> getPageById(Pageable pageable,@Param("fundingId")Long id);

    @EntityGraph(attributePaths = {"artist","artist.roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query(value = "SELECT f FROM Funding f WHERE f.title LIKE %:title% OR f.content LIKE %:content% ORDER BY f.fundingId desc",
            countQuery =  "SELECT COUNT(f.fundingId) FROM Funding f WHERE f.title LIKE %:title% OR f.content LIKE %:content%")
    Page<Funding> searchIndex(Pageable pageable, @Param("title")String title,@Param("content") String content);

    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.artist.artistId = :artistId ")
    Page<Funding> getPagebyArtistId(Pageable pageable, @Param("artistId")Long id);

    @EntityGraph(attributePaths = {"artist"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT f FROM Funding f WHERE f.artist.name = :name ")
    Page<Funding> getPageByartistName(Pageable pageable, @Param("name")String name);
}