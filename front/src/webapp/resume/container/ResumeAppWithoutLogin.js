import React from "react";
// DATA Files
import dataNavbar from "webapp/common/data/Navbar/main-navbar-data.json";
import dataServices from "webapp/common/data/Services/services-studio-data.json";
import dataSkills from "webapp/common/data/Skills/skills-data.json";
import dataPortfolio from "webapp/common/data/Portfolio/masonry-portfolio-data.json";
import dataCounters from "webapp/common/data/Counters/counters-data.json";
import dataTeam from "webapp/common/data/Team/team-data.json";
// Images
import imgFooter from "webapp/images/background/stars_bg.png";
//
import HeaderTwo from "webapp/common/Header/HeaderTwo";
import FooterOne from "webapp/common/Footer/FooterOne";
import HeroCreativeAgency from "webapp/common/HeroSlider/HeroCreativeAgency";
import WhatWeOfferSix from "webapp/common/WhatWeOffer/WhatWeOfferSix";
import ProcessFour from "webapp/common/Process/ProcessFour";
import PortfolioWideMasonry from "webapp/resume/component/list/ResumeList";
import TeamOne from "webapp/common/Team/TeamOne";
import CountersOne from "webapp/common/Counters/CountersOne";
import Loader from "webapp/common/Loader/Loader";
import PresentationTwo from "webapp/resume/component/presentation/PresentationTwo";



const ResumeAppWithoutLogin = () => (<>

    <HeaderTwo data={dataNavbar} />
    <PresentationTwo
      title="Superb Website Template <br /> for Startups & Small Businesses."
      text="We Are provide web design services to startups and existing business in<br> New York and around the US helping them make an impact online."
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
    />
   <WhatWeOfferNine>
      <TabsOne data={dataTabs} />
    </WhatWeOfferNine>
    <PortfolioWideMasonry
        tagline="Show Your Works"
        title="Our Portfolio"
        data={dataPortfolio}
        filter={true}
        categories={[
          "Branding",
          "Creative Design",
          "Web Design",
          "Stationery",
          "Photography",
        ]}
      />
    <CountersOne data={dataCounters} classes="pt-0" />
    <TeamOne
      tagline="Meet Creatives"
      title='You Are Only Good As Your <span class="text-bottom-line-sm">Team</span>'
      data={dataTeam}
    >
      Web teams are made up of a diverse group of people who all contribute
      their skills in multiple avenues. Each person has a different role that
      combines with the others to work toward a common goal.
    </TeamOne>
    <FooterOne/>
</>);

export default ResumeAppWithoutLogin;
