package api.philoarte.leejunghyunshop.resume.repository;


import api.philoarte.leejunghyunshop.resume.domain.ResumeFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

interface ResumeFileCustomRepository {
}

@Repository
@Transactional
public interface ResumeFileRepository extends JpaRepository<ResumeFile, Long>, ResumeFileCustomRepository {

    @Query("SELECT r from ResumeFile r WHERE r.resume.resumeId= :resumeId")
    List<ResumeFile> getAllForRemove(@Param("resumeId") Long resumeId);

    @Modifying
    @Query("DELETE from ResumeFile rf WHERE rf.resume.resumeId= :resumeId")
    void deleteByResumeId(@Param("resumeId") Long resumeId);
}