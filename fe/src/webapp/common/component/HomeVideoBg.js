import React, { useEffect, useState } from 'react';


import dataCounters from 'webapp/common/data/Counters/counters-data.json';
import dataServices from 'webapp/common/data/Services/services-minimal-data.json';
import dataTestimonials from 'webapp/common/data/Testimonials/testimonials-data.json';
import dataTeam from 'webapp/common/data/Team/team-data.json';


// Images
import homeHockney from 'webapp/images/home/homeHockney.jpg';
import imgWhatWeDo from 'webapp/images/EYE.jpg';
// Components

import HeaderOneMain from 'webapp/common/component/Navbar/HeaderOneMain';
import HeroHomeVideo from 'webapp/common/HeroSlider/HeroHomeVideo';
import WhatWeOfferEleven from '../WhatWeOffer/WhatWeOfferEleven';
import WhatWeDoOne from '../WhatWeDo/WhatWeDoOne';
import TestimonialsOne from '../Testimonials/TestimonialsOne';
import TeamOne from '../Team/TeamOne';
import FooterOne from '../Footer/FooterOne';
import CountersOne from '../Counters/CountersOne';
import Loader from '../Loader/Loader';
import { getLocalArtist } from 'webapp/artist/reducer/artist.reducer';

const HomeVideoBg = () => {
    useEffect(() => {
        getLocalArtist();
    }, []);
    const [loginInfo, setLoginInfo] = useState({});

    const checkLogin = () => {
        const loginValue = JSON.parse(localStorage.getItem(loginInfo));

        setLoginInfo(loginValue);
    };

    useEffect(checkLogin, []);

    return (
        <Loader>
            <HeaderOneMain />

            <HeroHomeVideo tagline="Welcome to" title="Philo_Atre" />

            <WhatWeOfferEleven
                data={dataServices}
                tagline="Show Your Talent"
                title="Creative Solutions <br />for Your Currier"
                text="Philo_Atre는 예술대학교 학생들을 위한 서비스 플랫폼 입니다. Philo_Arte는 전국 여러 예술대 학생들과 소통을 가능하게 합니다.  또한 대학 생활 내 전시, 졸업 작품, 과제 등을 당신의 커리어로 이용해보세요. 
                  그리고 여러분의 새로운 시작을 위한 투자를 받아 보세요."
                textImg=""
                image={homeHockney}
            />

            <CountersOne data={dataCounters} classes="pt-0" />
            <WhatWeDoOne tagline="What We Do" title="저작권 관리 " image={imgWhatWeDo} classes="no-bottom-line">
                Philo_Arte는 학생들의 작품의 저작권을 지켜주기 위해 언제나 노력하고 있습니다. 저희 사이트를 이용 하는 학생들 누구든지 자신이 올린 작품이 불법적인 경로로 이용당하고 있을시 저희가 알려드리겠습니다.
            </WhatWeDoOne>
            <TestimonialsOne data={dataTestimonials} />
            <TeamOne tagline="Meet Creatives" title="Our Team" data={dataTeam} />
            <FooterOne />
        </Loader>
    );
};

export default HomeVideoBg;
