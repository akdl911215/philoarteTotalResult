import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// DATA Files
import dataNavbar from "webapp/common/data/Navbar/main-navbar-data.json";
// Components
import HeaderOne from "webapp/common/Header/HeaderOne";
import { PageTitleArt, ArtContent } from "webapp/art";
import FooterOne from "webapp/common/Footer/FooterOne";

import {  getArtRead } from "webapp/art/reducer/art.reducer";

const ArtDetail = () => {

  const { id } = useParams()

  const art = useSelector(state => state.arts.current)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArtRead(id))
  }, [])
  
  return (
    <>
      <HeaderOne data={dataNavbar} />
      <PageTitleArt title="작품 상세" />
      <ArtContent post={art} />
      <FooterOne />
    </>
  );
}

export default ArtDetail;
