package api.philoarte.leejunghyunshop.artist.service.artistTestService;

import api.philoarte.leejunghyunshop.artist.domain.QArtist;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;

public class ArtistPredicate {

    public static Predicate artistMultySearch(String username, String name, String email){
        QArtist qArtist = QArtist.artist;

        BooleanBuilder builder = new BooleanBuilder();

        if(username != null) {
            builder.and(qArtist.username.eq(username));
        }

        if(name != null) {
            builder.and(qArtist.name.eq(name));
        }

        if(email != null) {
            builder.and(qArtist.email.eq(email));
        }

        return builder;
    }

}
