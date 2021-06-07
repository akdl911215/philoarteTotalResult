package api.philoarte.leejunghyunshop.repository;


import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.QArtist;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Log4j2
public class ArtistRepositoryTests {

    @Autowired
    private ArtistRepository repository;

    // 영속성 컨텍스트(Persistence Context) - Entity를 영구 저장하는 환경
    @PersistenceContext // 영속성 객체를 자동으로 삽입
    private EntityManager entityManager; // EntityManager 실제 Transaction 단위를 수행할 때마다 생성

    @Test
    public void test() {
        log.info("-----------------------");
    }

//    @Transactional
//    @Commit
//    @Test
//    public void testUpdatePw() {
//
//        repository.updatePassword(8L, "87654321");
//
//
//    }
//
//    @Transactional
//    @Commit
//    @Test
//    public void testUpdate2() {
//
//        Artist artist =  repository.findById(8L).get();
//
//        artist.setPassword("11111");
//        artist.setEmail("aaa@naver.com");
//
//        repository.save(artist);
//
//    }
//
//
//    @Test
//    public void testFindAllOld() {
//
//        Pageable pageable = PageRequest.of(0,10);
//
//        repository.getAllDataPaging(pageable).get().forEach(artist -> {
//            log.info(artist);
//            log.info(artist.getRoles());
//            log.info("--------------------");
//        });

//    }


    @Test
    public void testFindAll() {

        List<Artist> result = repository.getAllData();

        for (Artist artist : result) {
            System.out.println(artist + ": " + artist.getRoles());
        }
    }

    @Transactional
    @Commit
    @Test
    public void insertDummies(){
        IntStream.rangeClosed(1,300).forEach(i -> {
            Artist artist = Artist.builder()
                    .artistId((long) i)
                    .username("username " + i)
                    .password("password " + i)
                    .name("name " + i)
                    .email("email " + i)
                    .address("address " + i)
                    .phoneNumber("phoneNumber " + i)
                    .school("school " + i)
                    .department("department " + i)
                    .build();
            System.out.println("=====================");
            System.out.println(repository.save(artist));
        });
    }

    @Test
    @Transactional
    @Commit
    public void updateSchoolDepartment() {
        Optional<Artist> result = repository.findById(301L); // 존재하는 번호로 테스트함
        if(result.isPresent()){ // get 메소드를 사용하면 Optional 객체에 저장된 값에 접근할 수 있다.
                                //  get() 메소드를 호출 전에 isPresent() 메소드를 사용하여 Optional 개체에 저장된 값이 null 인지 아닌지 판단
            Artist artist = result.get();
            artist.changeSchool("ChangeBit");
            artist.changeDepartment("ChangeCamp");
            repository.save(artist);
        }
    }

    @Test
    @Transactional
    @Commit
    public void ArtistQueryTestOne() {
        Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by("artistId").descending()); // Sort를 descending로 내림차순으로 바꿔줌
        // Integer.MAX_VALUE 자리에 10을 넣으면 10개만 출력
        
        QArtist qArtist = QArtist.artist;
 
        String keyword = "2";

        BooleanBuilder builder = new BooleanBuilder(); // BooleanBuilder는 where문에 들어가는 조건들을 넣어주는 컨테이너

        BooleanExpression expression = qArtist.username.contains(keyword); // contains() 대상 문자열에 특정 문자열이 포함되어 있는지 확인하는 함수
                                                                            // com.querydsl.core.types.dsl.BooleanExpression; 사용해야함
        builder.and(expression); // 만들어진 조건은 where문에 and 나 or 같은 키워드와 결합시킨다

        Page<Artist> result = repository.findAll(builder, pageable);
        // BooleanBuilder는 repository에 추가된 QuerydslPredicateExcutor 인터페이스의 findlAll()을 사용할 수 있다.

        result.stream().forEach(artist -> {
            System.out.println(artist);
        });
    }

    @Test
    @Transactional
    @Commit
    public void testQueryMultySuch() {
        Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by("artistId").descending());
        QArtist qArtist = QArtist.artist;
        String keyword = "서울 2q";
        BooleanBuilder builder = new BooleanBuilder();
        BooleanExpression exUsername = qArtist.username.contains(keyword);
        BooleanExpression exSchool = qArtist.school.contains(keyword);
        BooleanExpression exAll = exUsername.or(exSchool); // 두 Predicate중 1개만 true return 시 true
        builder.and(exAll); // .and는 BooleanBuilder에 추가
        builder.and(qArtist.artistId.gt(0L)); // gt(0L) = artistID는 0보다 크다
        Page<Artist> result = repository.findAll(builder, pageable);
        result.stream().forEach(artist -> {
            System.out.println(artist);
        });
    }


    @Test
    @Transactional
    @Commit
    public void artistAllList() throws Exception {
        List<Artist> artistList = repository.findAll();
        assertThat(artistList.size()).isEqualTo(10);
    }



    @Test
    @Transactional
    @Commit
    public void testQueryArtistMultySearch() throws Exception{



        JPAQueryFactory queryFactory = new JPAQueryFactory(entityManager);

        QArtist qArtist = QArtist.artist;

//        String name = "수잔";
//
//        JPAQuery<Artist> query = queryFactory.selectFrom(qArtist);
//
//        if (name.equals("수잔")){
//            query = query.where(qArtist.name.eq("수잔"));
//        } else {
//            query = query.where(qArtist.name.eq("김아영"));
//        }

        long result = queryFactory.selectFrom(qArtist)
                        .where(qArtist.username.eq("2q4od"))
                        .fetchCount();
                        // username 이 4o인사람 찾기

        List<Artist> result2 = queryFactory.selectFrom(qArtist)
                                .where(qArtist.name.eq("김"),
                                        qArtist.email.like("%.com")).fetch();
                                // name = 김 이고 메일 뒤가 com으로 끝나는 사람

//        QueryResult<Artist> result3 = queryFactory.selectFrom(qArtist)
//                                        .where(qArtist.username.eq("김"),
//                                        qArtist.name.between("20","40")).fetchResults();

//          assertThat("2q4").isNotEmpty()
//                  .contains("0d")
//                  .isEqualTo("2q40d");
        System.out.println("==============================================");
        assertThat(result).isEqualTo(3);
//        assertThat(result).as("check %s's username").isEqualTo("rya");
//        assertThat(result2.get(0).getName()).isEqualTo("아영");
//        assertThat(result3.getTotal)

//        assertThat("Hello, world! Nice to meet you.") // 주어진 "Hello, world! Nice to meet you."라는 문자열은
//                .isNotEmpty() // 비어있지 않고
//                .contains("Nice") // "Nice"를 포함하고
//                .contains("world") // "world"도 포함하고
//                .doesNotContain("ZZZ") // "ZZZ"는 포함하지 않으며
//                .startsWith("Hell") // "Hell"로 시작하고
//                .endsWith("u.") // "u."로 끝나며
//                .isEqualTo("Hello, world! Nice to meet you."); // "Hello, world! Nice to

//        assertThat(3.14d) // 주어진 3.14라는 숫자는
//                .isPositive() // 양수이고
//                .isGreaterThan(3) // 3보다 크며
//                .isLessThan(4) // 4보다 작습니다
//                .isEqualTo(3, offset(1d)) // 오프셋 1 기준으로 3과 같고
//                .isEqualTo(3.1, offset(0.1d)) // 오프셋 0.1 기준으로 3.1과 같으며
//                .isEqualTo(3.14); // 오프셋 없이는 3.14와 같습니다


//        Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by("artistId").descending());
//        QArtist qArtist = QArtist.artist;
//        String keyword = "서울 2q";
//        BooleanBuilder builder = new BooleanBuilder();
//
//
//        BooleanExpression exUsername = qArtist.username.contains(keyword);
//        BooleanExpression exSchool = qArtist.school.contains(keyword);
//        BooleanExpression exAll = exUsername.or(exSchool); // 두 Predicate중 1개만 true return 시 true
//        builder.and(exAll); // .and는 BooleanBuilder에 추가
//        builder.and(qArtist.artistId.gt(0L)); // gt(0L) = artistID는 0보다 크다
//        Page<Artist> result = repository.findAll(builder, pageable);
//        result.stream().forEach(artist -> {
//            System.out.println(artist);
//        });
    }
}
