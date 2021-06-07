import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageList } from 'webapp/artist/index';
import 'webapp/artist/style/ArtistPageList2.css';
import { fetchPage, getLocalArtist, fetchFilePage, getArtistImgList } from 'webapp/artist/reducer/artist.reducer';

const ArtistPageList2 = () => {
    const dispatch = useDispatch();
    const pageResult = useSelector((state) => state.artists.pageResult);
    const type = useSelector((state) => state.artists.type);
    const keyword = useSelector((state) => state.artists.keyword);
    const pageFileDto = useSelector((state) => state.artists.pageFileDto);
    const artistsState = useSelector((state) => state.artistsState);
    const artistDtoList = useSelector((state) => state.artists.dtoList);
    const artistsPageFileDtoList = useSelector((state) => state.artists.pageFileDto.dtoList);
    console.log('artistsPageFileDtoList ::: ', artistsPageFileDtoList);
    console.log('artistDtoList :::: ', artistDtoList);
    console.log('artistsState :::: ', artistsState);
    console.log('pageFileDto ::::::::: ', pageFileDto);
    const page = pageResult.page;

    const artistsFilesimgName = useSelector((state) => state.artists.artistsState.imgName);
    const artistsFilesUuid = useSelector((state) => state.artists.artistsState.uuid);
    console.log('artistsFilesimgName :::: ', artistsFilesimgName);
    console.log('artistsFilesUuid :::: ', artistsFilesUuid);

    useEffect(() => {
        const param = { type: type, keyword: keyword, page: page }; // , pageFileDto: pageFileDto
        const paramAddFile = { pageFileDto: pageFileDto }; //type: type, keyword: keyword, page: page,
        dispatch(fetchPage(param)); //페이지에 1페이지 뿌려주는 역할
        // dispatch(fetchFilePage(paramAddFile)); //페이지에 1페이지 뿌려주는 역할
        dispatch(getLocalArtist());
        // dispatch(getArtistImgList());
    }, []);

    //<img src={'http://localhost:8080/artist_files/display?imgName=' + `${artistsFilesUuid}` + 's_' + `${artistsFilesimgName}`} />
    return (
        <>
            <div>
                <table className="table table-striped table-bordered">
                    <table>
                        <thead style={{ textAlign: 'center' }}>
                            <th>대표이미지</th>
                            <th>유저넘버 </th>
                            <th>아이디 </th>
                            <th>비밀번호 </th>
                            <th>이름 </th>
                            <th>E-mail </th>
                            <th>주소 </th>
                            <th>학교 </th>
                            <th>학과 </th>
                        </thead>

                        <tbody style={{ textAlign: 'center' }}>
                            {/* {pageFileDto.dtoList.map((artist, id) => {
                                return (
                                    <>
                                        <tr key={id}>
                                            <td>
                                                <div key={artist.uuid}>
                                                    <img src={'http://localhost:8080/artist_files/display?imgName=' + artist.uuid + 's_' + artist.imgName} />
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })} */}

                            {pageResult.dtoList.map((artist, id) => {
                                return (
                                    <>
                                        <tr key={id}>
                                            <td>{artist.artistId}</td>
                                            <td>{artist.username}</td>
                                            <td>{artist.password}</td>
                                            <td>{artist.name}</td>
                                            <td>{artist.email}</td>
                                            <td>{artist.address}</td>
                                            <td>{artist.school}</td>
                                            <td>{artist.department}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                    <PageList {...pageResult} type={type} keyword={keyword} />
                </table>
            </div>
        </>
    );
};
export default ArtistPageList2;
