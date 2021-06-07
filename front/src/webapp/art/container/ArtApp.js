import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// DATA Files
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
import dataClients from 'webapp/common/data/Clients/clients-data.json';
// Images
// Components
import HeaderOne from 'webapp/common/Header/HeaderOne';
import FooterOne from 'webapp/common/Footer/FooterOne';
import ClientsCarousel from 'webapp/common/Carousel/ClientsCarousel';
import { HeroMarketing, PresentationTwo, ArtList, SearchBar } from 'webapp/art';

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
            <HeroMarketing />
            <PresentationTwo title="Superb Website Template <br /> for Startups & Small Businesses." text="당신의 작품을 등록해 보세요." textBtn="작품 등록" pathBtn={process.env.PUBLIC_URL} />
            <ArtList data={pageResult.dtoList} filter={true} categories={['예술', '사진', '연극']} />
            <SearchBar />
            <ClientsCarousel data={dataClients} />
            <FooterOne />
        </>
    );
};

export default ArtPage;
