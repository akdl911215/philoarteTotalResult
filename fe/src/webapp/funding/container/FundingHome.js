import React, { useEffect, useState} from "react";
// DATA Files
import dataNavbar from "webapp/common/data/Navbar/main-navbar-data.json";
import dataTestimonials from "webapp/common/data/Testimonials/testimonials-data.json";
import dataClients from "webapp/common/data/Clients/clients-data.json";
// Components
import HeaderSocial from "webapp/common/Header/HeaderSocial";
import HomeMarketingSlider from "webapp/common/HeroSlider/HeroMarketing";
import FooterOne from "webapp/common/Footer/FooterOne";
import TestimonialsThree from "webapp/funding/component/showing/TestimonialsTwo";
import ClientsGrid from "webapp/common/Carousel/ClientsCarousel";
import BlogSection from "webapp/funding/component/showing/BlogSection";
import FundingList from "../component/FundingList"
import {Link} from 'react-router-dom'
import Loader from "webapp/common/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { currentFunding, getFundingList } from "../reducer/funding.reducer";
import HomeList from "../component/home/HomeList";
import { Button, Grid } from "@material-ui/core";
import { getLocalArtist } from "webapp/artist/reducer/artist.reducer";
import HeaderOneMain from 'webapp/common/component/Navbar/HeaderOneMain';

const FundingHome = () => {
  const pageResult= useSelector(state=>state.fundings.pageResult)
  const dispatch = useDispatch()
  const page = pageResult.page
  useEffect((e)=>{
    dispatch(getFundingList(page))
  },[])
  useEffect(() => {
    getLocalArtist();
}, []);
  const [loginInfo, setLoginInfo] = useState({});

  const checkLogin = () => {
      const loginValue = JSON.parse(localStorage.getItem(loginInfo));

      setLoginInfo(loginValue);
  };
  const fundings = useSelector(state => state.Fundings)
console.log("login info는::::::::::::::::::::::::::::::",loginInfo)
  return(
  <>
    <HeaderOneMain />

    <HomeMarketingSlider/>
    <HomeList
      tagline="Let's participate Funding"
      title="당신이 함께 할 수 있는 펀딩리스트"
      backfont="FUND"
      classes="no-bottom-line"
      data={pageResult.dtoList}
      filter={true}
      hashtag={[
        "전체보기",
        "그림",
        "조형",
        "조각",
        "건축",
        "의상",
        "소품",
      ]}
    />
   
    
    <TestimonialsThree data={dataTestimonials} title="Our Artist Says">
      <ClientsGrid data={dataClients} classes="mt-100" />
    </TestimonialsThree>
   
    <FooterOne />
  </>
);
    }
export default FundingHome;
