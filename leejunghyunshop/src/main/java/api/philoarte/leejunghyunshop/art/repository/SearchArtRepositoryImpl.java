package api.philoarte.leejunghyunshop.art.repository;

import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.art.domain.QArt;
import api.philoarte.leejunghyunshop.art.domain.QArtFile;
import api.philoarte.leejunghyunshop.artist.domain.QArtist;
import api.philoarte.leejunghyunshop.category.domain.QCategory;
import api.philoarte.leejunghyunshop.resume.domain.QResume;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.jpa.JPQLQuery;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Log4j2
public class SearchArtRepositoryImpl extends QuerydslRepositorySupport implements SearchArtRepository  {

    public SearchArtRepositoryImpl() {
        super(Art.class);
    }

    @Override
    public Art search() {

        log.info("searchPage..........");

        QArt art = QArt.art;
        QArtist artist = QArtist.artist;
        QCategory category = QCategory.category;
        QResume resume = QResume.resume;
        QArtFile artFile = QArtFile.artFile;

        JPQLQuery<Art> jpqlQuery = from(art);
        jpqlQuery.leftJoin(artist).on(art.artist.eq(artist));
        jpqlQuery.leftJoin(category).on(art.category.eq(category));
        jpqlQuery.leftJoin(resume).on(art.resume.eq(resume));
        jpqlQuery.leftJoin(artFile).on(artFile.art.eq(art));

        JPQLQuery<Tuple> tuple = jpqlQuery.select(art, artist, category, resume, artFile);

        tuple.groupBy(art);

        log.info("---------------------------");
        log.info(tuple); // JPQL
        log.info("---------------------------");

        // List<Art> result = jpqlQuery.fetch();
        List<Tuple> result = tuple.fetch();

        log.info(result); // 실행되는 SQL

        return null;

    }

    @Override
    public Page<Object[]> searchPage(String type, String keyword, Pageable pageable) {

        log.info("searchPage..........");

        QArt art = QArt.art;
        QArtist artist = QArtist.artist;
        QCategory category = QCategory.category;
        QResume resume = QResume.resume;
        QArtFile artFile = QArtFile.artFile;

        JPQLQuery<Art> jpqlQuery = from(art);
        jpqlQuery.leftJoin(artist).on(art.artist.eq(artist));
        jpqlQuery.leftJoin(category).on(art.category.eq(category));
        jpqlQuery.leftJoin(resume).on(art.resume.eq(resume));
        jpqlQuery.leftJoin(artFile).on(artFile.art.eq(art));

        // SELECT a, at, c, r, f FROM Art a
        // LEFT JOIN a.artist at
        // LEFT JOIN a.category c
        // LEFT JOIN a.resume r
        // LEFT JOIN ArtFile f ON f.art = a
        JPQLQuery<Tuple> tuple = jpqlQuery.select(art, artist, category, resume, artFile);

        BooleanBuilder booleanBuilder = new BooleanBuilder();
        BooleanExpression expression = art.artId.gt(0L);

        booleanBuilder.and(expression);

        if (type != null) {
            log.info("타입 널 값 아님");
            String[] typeArr = type.split("");

            log.info(Arrays.toString(typeArr));
            // 검색 조건을 작성하기
            BooleanBuilder conditionBuilder = new BooleanBuilder();

            for (String t : typeArr) {
                switch (t) {
                    case "u":
                        conditionBuilder.or(artist.username.contains(keyword));
                        break;
                    case "n":
                        conditionBuilder.or(artist.name.contains(keyword));
                        break;
                    case "c":
                        conditionBuilder.or(category.categoryName.contains(keyword));
                        break;
                    case "t":
                        conditionBuilder.or(art.title.contains(keyword));
                        break;
                    case "d":
                        conditionBuilder.or(art.description.contains(keyword));
                        break;
                }
            }
            booleanBuilder.and(conditionBuilder);
        }

        tuple.where(booleanBuilder);

        // order by
        Sort sort = pageable.getSort();

        // tuple.orderBy(art.artId.desc());

        sort.stream().forEach(order -> {
            Order direction = order.isAscending() ? Order.ASC : Order.DESC;
            String prop = order.getProperty(); // 기준이 되는 값

            log.info("---------- Sort ----------");
            log.info(direction);
            log.info(prop);

            PathBuilder orderByExpression = new PathBuilder(Art.class, "art");
            tuple.orderBy(new OrderSpecifier(direction, orderByExpression.get(prop)));
        });

        tuple.groupBy(art);

        List<Tuple> result = tuple.fetch();

        // page 처리
        log.info("---------- Page ----------");
        log.info(pageable.getOffset());
        log.info(pageable.getPageSize());

        tuple.offset(pageable.getOffset()); // 현재 페이지
        tuple.limit(pageable.getPageSize()); // 페이지 크기

        log.info(result);

        long count = tuple.fetchCount();

        log.info("COUNT: " + count);

        return new PageImpl<Object[]>(result.stream().map(t -> t.toArray()).collect(Collectors.toList()), pageable,
                count);

    }
}
