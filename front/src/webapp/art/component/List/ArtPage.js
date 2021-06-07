import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// DATA Files
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
import dataClients from 'webapp/common/data/Clients/clients-data.json';
// Images
// Components
import FooterOne from 'webapp/common/Footer/FooterOne';
import HeaderOne from 'webapp/common/Header/HeaderOne';
import ClientsCarousel from 'webapp/common/Carousel/ClientsCarousel';
import { PageTitle, ArtList, SearchBar } from 'webapp/art';

import { getArtList, getArtSearch } from 'webapp/art/reducer/art.reducer';

const ArtPage = () => {
    const pageResult = useSelector((state) => state.arts.pageResult);
    const type = useSelector((state) => state.arts.type);
    const keyword = useSelector((state) => state.arts.keyword);

    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getArtList(pageResult.page))
    // }, [pageResult.page])

    useEffect(() => {
        !type && !keyword ? dispatch(getArtList(pageResult.page)) : dispatch(getArtSearch({ type: type, keyword: keyword, page: pageResult.page }));
    }, []);

    return (
        <>
            <HeaderOne data={dataNavbar} />
            <PageTitle title="작품 목록" image={''} />
            <ArtList data={pageResult.dtoList} filter={true} categories={['예술', '사진', '연극']} />
            <SearchBar />
            <ClientsCarousel data={dataClients} />
            <FooterOne />
        </>
    );
};

export default ArtPage;
