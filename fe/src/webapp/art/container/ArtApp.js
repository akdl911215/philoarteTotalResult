import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// DATA Files
import dataNavbar from "webapp/common/data/Navbar/main-navbar-data.json";
// Components
import HeaderOne from "webapp/common/Header/HeaderOne";
import FooterOne from "webapp/common/Footer/FooterOne";
import { HeroMarketing, PresentationTwo, ArtList, SearchBar, PageList } from "webapp/art";

import { getArtList, getArtSearch } from 'webapp/art/reducer/art.reducer'

const ArtPage = () => {
  const pageResult = useSelector(state => state.arts.pageResult)
  const type = useSelector(state => state.arts.type)
  const keyword = useSelector(state => state.arts.keyword)
  const page = pageResult.page
  const param = { type: type, keyword: keyword, page: page }

  const dispatch = useDispatch()

  useEffect(() => {
    (!type && !keyword) ?
      dispatch(getArtList(page))
      :
      dispatch(getArtSearch(param))
  }, [])

  return (
    <>
      <HeaderOne data={dataNavbar} />
      <HeroMarketing />
      <PresentationTwo
        title="Philo Arte 만의<br/>작품 관리 서비스를 누리세요."
        text="당신의 작품을 등록해 보세요."
        textBtn="작품 등록"
        pathBtn={"/art/register"}
      />
      <ArtList
        tagline="Show Your Works"
        title="Our Arts"
        dash="show"
        dashColor="dark"
        data={pageResult.dtoList}
        filter={true}
        categories={[
          "예술",
          "사진",
          "연극"
        ]}
      />
      <SearchBar />
      <PageList />
      <FooterOne />
    </>
  )
}

export default ArtPage;
