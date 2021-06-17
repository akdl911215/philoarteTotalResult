import React, { useEffect, useState } from "react";
// DATA Files
import dataServices from "webapp/resume/data/services-studio-data.json";
import dataSkills from "webapp/resume/data/skills-data.json";
import dataCounters from "webapp/common/data/Counters/counters-data.json";
import dataTeam from "webapp/common/data/Team/team-data.json";

import FooterOne from "webapp/common/Footer/FooterOne";
import { ResumeList, Paging, SearchBar, AboutFive,CounterRowOne, PresentationTwo, TeamOne, WhatWeOfferSix} from "webapp/resume/index"
import { useDispatch, useSelector } from "react-redux";
import { listResume, searchResume } from "webapp/resume/reducer/resume.reducer";
import HeaderOneMain from "webapp/common/component/Navbar/HeaderOneMain";
import { getLocalArtist } from "webapp/artist/reducer/artist.reducer";




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
    <HeaderOneMain/>
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
      title="Resume Overview"
      text='<p class="mt-30">
    Philo-Arte의 레쥬메 서비스는 여러분의 새로운 도전의 시작과 만남을 위하여 누구나 이력서를 볼 수 있습니다. 
    간단한 이력서를 작성해 보세요 여러 기업들과 펀더 들이 당신을 기다립니다. 
  </p>'>
    <CounterRowOne data={dataCounters} classes="mt-50" />
    </AboutFive>
    <TeamOne
      tagline="MEET HARD WORKER"
      title='Philo-Arte의 인플루언서들을 <span class="text-bottom-line-sm">만나보세요 </span>'
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
