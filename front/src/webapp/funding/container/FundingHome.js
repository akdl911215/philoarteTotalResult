import React, { useEffect } from "react";
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

const FundingHome = () => {
  const pageResult= useSelector(state=>state.fundings.pageResult)
  const dispatch = useDispatch()
  const page = pageResult.page
  useEffect((e)=>{
    dispatch(getFundingList(page))
  },[])

  const fundings = useSelector(state => state.Fundings)

  return(
  <>
 
    <HeaderSocial data={dataNavbar} />

    <HomeMarketingSlider/>
    {/* <button onClick={onCategoryClick()}>클릭</button> */}
    <HomeList
      tagline="Let's participate Funding"
      title="당신이 함께 할 수 있는 펀딩리스트"
      backfont="FUND"
      classes="no-bottom-line"
      data={pageResult.dtoList}
      filter={true}
      hashtag={[
        "전체보기",
        "약",
        "건강기능",
        "운동",
        "의류",
        "소품",
      ]}
    />
   
    
    <TestimonialsThree data={dataTestimonials} title="Our Artist Says">
      <ClientsGrid data={dataClients} classes="mt-100" />
    </TestimonialsThree>
    <BlogSection title="종료 된 펀딩" data={fundings} />
   
    <FooterOne />
  </>
);
    }
export default FundingHome;
