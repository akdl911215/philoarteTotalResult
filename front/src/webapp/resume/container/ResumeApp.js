import React, { useEffect } from "react";
// DATA Files
import dataNavbar from "webapp/common/data/Navbar/main-navbar-data.json";
import dataServices from "webapp/resume/data/services-studio-data.json";
import dataSkills from "webapp/common/data/Skills/skills-data.json";
import dataCounters from "webapp/common/data/Counters/counters-data.json";
import dataTeam from "webapp/common/data/Team/team-data.json";

import HeaderTwo from "webapp/common/Header/HeaderTwo";
import FooterOne from "webapp/common/Footer/FooterOne";
import { ResumeList, Paging, SearchBar, AboutFive,CounterRowOne, PresentationTwo, TeamOne, WhatWeOfferSix} from "webapp/resume/index"
import { useDispatch, useSelector } from "react-redux";
import { listResume, searchResume } from "webapp/resume/reducer/resume.reducer";




const ResumeApp = () => {
  const searchType = useSelector(state => state.resumes.type)
  const searchKeyword = useSelector(state => state.resumes.keyword)
  const pageResult = useSelector(state => state.resumes.pageResult)
  const page = pageResult.page
  const param = {type: searchType, keyword: searchKeyword, page: page}
  
  
  const dispatch = useDispatch();
  
  useEffect((e)=>{
    (!searchType && !searchKeyword) ? dispatch(listResume(page)): dispatch(searchResume(param))
  },[])  


  return(<>
    <HeaderTwo data={dataNavbar} />
    <PresentationTwo
      title="언제, 어디서나 <br/> 당신의 포트폴리오를 관리해보세요."
      text="포트폴리오를 등록해 놓으면 자동으로 당신의 작품이 포트폴리오에 등록이 됩니다."
      textBtn="REGISTER"
      textBtn2="LOGIN"
    />
    <WhatWeOfferSix
      tagline="Philo-Portfolio"
      title='Philo-arte만의 <br/>차별화된 포트폴리오<br/> <span class="text-bottom-line-sm"> 관리 서비스</span>'
      data={dataServices}
    />
    <ResumeList
        resumes = {pageResult.dtoList}
        tagline="Show Your Works"
        title= "Portfolio"
      />
      <SearchBar/>
      <Paging/>
        <AboutFive
      data={dataSkills}
      title="Agency Overview"
      text='<p class="mt-30">
    Every site we create is designed and optimised to look and function
    just as well on mobile phones and tablets as it does on a desktop,
    creating a seamless experience across any device.
  </p>
  <p>
    We use the latest development standards and web technologies to keep
    things cutting edge, ensuring your new website is built on a stable
    and future-proof foundation.
  </p>'>
    <CounterRowOne data={dataCounters} classes="mt-50" />
    </AboutFive>
    <TeamOne
      tagline="MEET HARD WORKER"
      title='열심히 일한 당신 만을 위한 <span class="text-bottom-line-sm"> 보상</span>'
      data={dataTeam}
    >
      Web teams are made up of a diverse group of people who all contribute
      their skills in multiple avenues. Each person has a different role that
      combines with the others to work toward a common goal.
    </TeamOne>
    <FooterOne/>
</>)
};

export default ResumeApp;
