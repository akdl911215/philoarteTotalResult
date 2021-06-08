package api.philoarte.leejunghyunshop.resume.repository;

import api.philoarte.leejunghyunshop.resume.domain.Resume;
import api.philoarte.leejunghyunshop.resume.repository.searchRepository.SearchResumeRepository;
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
import java.util.Optional;

interface ResumeCustomRepository {


    @EntityGraph(attributePaths = { "artist", "category", "artist.roles" }, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT r FROM Resume r ORDER BY r.resumeId desc")
    List<Resume> getAllResume();

    @EntityGraph(attributePaths = { "artist", "category", "artist.roles" }, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT r FROM Resume r ORDER BY r.resumeId desc ")
    Page<Resume> getAllDataPaging(Pageable pageable);

    @EntityGraph(attributePaths = { "category", "artist.roles" }, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT r FROM Resume r  WHERE r.artist.artistId= :artistId")
    Page<Resume> getUserPKDataPage(@Param("artistId") Long artistId, Pageable pageable);

    @EntityGraph(attributePaths = { "artist", "category", "artist.roles" }, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT r FROM Resume r WHERE r.category.categoryId=:categoryId")
    Page<Resume> getCategoryPKDataPage(@Param("categoryId") Long categoryId, Pageable pageable);

    @EntityGraph(attributePaths = { "artist", "category", "artist.roles" }, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT r FROM Resume r WHERE r.category.categoryId= :categoryId AND r.artist.artistId = :artistId")
    Page<Resume> getCategoryAndUserDataPage(@Param("categoryId") Long categoryId, @Param("artistId") Long artistId,
                                            Pageable pageable);

    @Query("SELECT DATE_FORMAT(reg_date, '%y-%m-%d') AS date, count(*) AS cnt FROM Resume WHERE artist.artistId= :artistId GROUP BY DATE_FORMAT(reg_date, '%Y%m%d') ORDER BY date DESC")
    List<Object[]> countByArtistId(@Param("artistId") Long artistId);
}

@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long>, ResumeCustomRepository, SearchResumeRepository {



    @EntityGraph(attributePaths = { "artist", "category", "artist.roles" }, type = EntityGraph.EntityGraphType.FETCH)
    Optional<Resume> findById(@Param("resumeId") Long resumeId);

    @EntityGraph(attributePaths = { "artist", "category", "artist.roles" }, type = EntityGraph.EntityGraphType.FETCH)
    List<Resume> findAll();

}
