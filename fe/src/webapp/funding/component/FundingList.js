import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFundingList, searchSomething } from 'webapp/funding/reducer/funding.reducer';
import HeaderSocial from 'webapp/common/Header/HeaderSocial';
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
import FooterOne from 'webapp/common/Footer/FooterOne';
import {HeroMarketing} from 'webapp/funding';
import FundingListForm from './FundingListForm';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
import HeaderOneMain from 'webapp/common/component/Navbar/HeaderOneMain';

const FundingList = () => {
    const pageResult = useSelector((state) => state.fundings.pageResult);

    const page = pageResult.page;

    const keywordRef = useRef();
    const dispatch = useDispatch();

    const fundings = useSelector((state) => {
        return state.fundings.pageResult.dtoList;
    });
    const msg = useSelector((state) => {
        return state.fundings.msg;
    });

    useEffect(
        (e) => {
            dispatch(getFundingList(page));
        },
        [page]
    );
    useEffect(() => {
        getLocalArtist();
    }, []);
    const [loginInfo, setLoginInfo] = useState({});

    const checkLogin = () => {
        const loginValue = JSON.parse(localStorage.getItem(loginInfo));

        setLoginInfo(loginValue);
    };

    useEffect(checkLogin, []);

    const [keyword, setKeyword] = useState('');
    const handleChange = async () => {
        const keywordStr = keywordRef.current.value;

        const keyword = { keyword: keywordStr };
        console.log(keyword);
        await dispatch(getFundingList(page));
        dispatch(searchSomething(page, keyword));
    };

    const FundingPageList = () => {
        const { pageList, page, start, end, prev, next } = useSelector((state) => state.fundings.pageResult);

        const dispatch = useDispatch();

        const movePage = (page) => {
            dispatch(getFundingList(page));
        };

        const listNum = pageList.map((i) => (
            <button key={i} onClick={() => movePage(i)}>
                {i}
            </button>
        ));

        return (
            <div>
                {prev ? <button onClick={() => movePage(start - 1)}>prev</button> : <></>}
                {listNum}
                {next ? <button onClick={() => movePage(end + 1)}>next</button> : <></>}
            </div>
        );
    };

    const totalList = fundings.map((funding, i) => {
        return (
            <Grid item container>
                <Grid item xs={false} sm={2} direction="column" />
                <Grid item xs={12} sm={8}>
                    <FundingListForm key={funding.fundingId} fundingId={funding.fundingId} title={funding.title} content={funding.content} hashtag={funding.hashtag} image={funding.fundingFiles} goalPrice={funding.goalPrice} />
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        );
    });
    return (
        <>
            <div>
            <HeaderOneMain />
                <HeroMarketing />
                <textarea type="text" placeholder="Philo-Arte 통합 검색" name="keyword" ref={keywordRef} style={{ color: 'black' }} />
                <Button onClick={handleChange} style={{ marginLeft: 50 }} variant="outlined" size="large" color="primary">
                    검색하기
                </Button>

                {totalList}
                <Grid xs={8} style={{ marginLeft: 230 }}>
                    <Link to={'/funding/register'}>
                        <Button variant="outlined" size="large" color="primary" >
                            새로운 펀딩 등록하기
                        </Button>
                    </Link>
                </Grid>
                <Grid style={{ display: 'flex', marginLeft: '30' }}></Grid>
                <div style={{ display: 'flex', justifyContent: 'center' }}>{FundingPageList()}</div>
            </div>

            <FooterOne />
        </>
    );
};

export default FundingList;
