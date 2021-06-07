package api.philoarte.leejunghyunshop.artist.repository.fileRepository;

import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.QArtistFile;
import com.querydsl.jpa.impl.JPAQuery;
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


//    QArtistFile artistFile = QArtistFile.artistFile;
//    @Override
//    ArtistFile getOne(Long aLong);

//    @Query("SELECT af FROM ArtistFile af WHERE af.uuid = :uuid AND af.imgName = :imgName")
//    void getUuidImgName(@Param("artistFileId") Long artistFileId);
}
