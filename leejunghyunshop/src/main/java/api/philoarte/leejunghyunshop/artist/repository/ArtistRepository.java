package api.philoarte.leejunghyunshop.artist.repository;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long>,
                        QuerydslPredicateExecutor<Artist> {



    boolean existsByUsername(@Param("username")String username);
    Optional<Artist> findByUsername(String username);

    @EntityGraph(attributePaths = {"roles"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("select a from Artist a order by a.artistId desc")
    List<Artist> getAllData();

//    @EntityGraph(attributePaths = {"roles"}, type = EntityGraph.EntityGraphType.FETCH)
//    @Query("select a from Artist a group by a  order by a.artistId desc")
//    Page<Artist> getAllDataPaging(Pageable pageable);

    @Query(value = "select * from artists where username=:username and password=:password", nativeQuery = true)
    Artist signin(@Param("username") String username, @Param("password")String password);

//    @Query("select a from Artist a order by a.artistId=?, a.username=?, a.password=?, a.artistName=?, a.email=?" +
//            "a.phoneNumber=?, a.address=?, a.school=?, a.department=?")
//    Artist signup(@Param("artistId") Long artistId, @Param("username") String username, @Param("password") String password, @Param("artistName") String artistName,
//                  @Param("email") String email, @Param("phoneNumber") String phoneNumber, @Param("address") String address, @Param("school") String school,
//                  @Param("department") String department);


    // 마이페이지
//    @Modifying
//    @Query("update Artist a set a.address = :addr where a.artistId =:artistId" )
//      void updateInfo(@Param("addr")String addr, @Param("pw") Long artistId);

//    @Modifying
//    @Query("Update FROM Artist a set a.password = :pw where a.artistId = :artistId")
//    int updatePassword(@Param("artistId") Long artistId, @Param("pw") String pw);

//    @Query("select u from UserVO u where u.username= :username and u.password= :password")
//    ArtistDto login(@Param("username") String username, @Param("password") String password);


//    List<Artist> findAll();
//    void deleteById(Long artist);

//    public Optional<Artist> findById(@Param("artistId") Long artistId);
//    @Query(value = "update artists set password=#{password}, email=#{email}, phoneNumber=#{phoneNumber}, address=#{address}, " +
//                            "school=#{school}, department=#{department} where artistId = #{artistId} ", nativeQuery = true)
//    public Artist updateById(@Param("ArtistId") String username, String password);


}
