package api.philoarte.leejunghyunshop.artist.service.artistTestService;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface MapStructService {
    MapStructService INSTANCE = Mappers.getMapper(MapStructService.class);

    @Mapping(target = "artist.artistId", expression = "java(artistDto.getArtistId")
    @Mapping(target = "artist.username", expression = "java(artistDto.getUsername")
    @Mapping(target = "artist.password", expression = "java(artistDto.getPassword")
    @Mapping(target = "artist.name", expression = "java(artistDto.getName")
    @Mapping(target = "artist.email", expression = "java(artistDto.getEmail")
    @Mapping(target = "artist.phoneNumber", expression = "java(artistDto.getPhoneNumber")
    @Mapping(target = "artist.address", expression = "java(artistDto.getAddress")
    @Mapping(target = "artist.school", expression = "java(artistDto.getSchool")
    @Mapping(target = "artist.department", expression = "java(artistDto.getDepartment")
    Artist dtoToArtist(ArtistDto artistDto);

    @Mapping(target = "artistId", expression = "java(artist.getArtistId)")
    @Mapping(target = "username", expression = "java(artist.getUsername)")
    @Mapping(target = "password", expression = "java(artist.getPassword)")
    @Mapping(target = "name", expression = "java(artist.getName)")
    @Mapping(target = "email", expression = "java(artist.getEmail)")
    @Mapping(target = "phoneNumber", expression = "java(artist.getPhoneNumber)")
    @Mapping(target = "address", expression = "java(artist.getAddress)")
    @Mapping(target = "school", expression = "java(artist.getSchool")
    @Mapping(target = "department", expression = "java(artist.getDepartment")
    ArtistDto entityToArtist(Artist artist);
}
