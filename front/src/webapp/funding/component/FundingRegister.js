import React, { useRef } from 'react';
import HeaderSocial from 'webapp/common/Header/HeaderSocial';
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
import HomeMarketingSlider from 'webapp/funding/component/showing/HeroMarketing';
import FooterOne from 'webapp/common/Footer/FooterOne';
import { saveFunding } from '../reducer/funding.reducer';
import { useDispatch } from 'react-redux';
import FileRegister from './register/FileRegister';
import TextRegister from './register/TextRegister';

const FundingRegister = ({ requestRefresh }) => {
    const dispatch = useDispatch();

    const childRef = useRef();
    let uploadedFiles = null;
    const sendTextForm = (title, content, goalPrice, hashtag) => {
        console.log('title: ' + title);
        console.log('content: ' + content);
        console.log('goalPrice' + goalPrice);
        console.log('hashtag' + hashtag);
        childRef.current.send();
        console.log(uploadedFiles);

        const data = { title: title, content: content, goalPrice: goalPrice, hashtag: hashtag, fundingFiles: uploadedFiles };

        dispatch(saveFunding(data));
        console.log(saveFunding(data));
    };

    const getUploadedFiles = (uplodedFilesResult) => {
        console.log('getUploadedFiles');
        uploadedFiles = uplodedFilesResult;
    };

    return (
        <div>
            <HeaderSocial data={dataNavbar} />
            <HomeMarketingSlider />
            <div style={{ marginLeft: 100 }}>
                <h2>펀딩 등록</h2>
            </div>
            <hr />

            <TextRegister sendTextForm={sendTextForm}></TextRegister>
            <hr />
            {/* <ImagesUploader cref={childRef} getUploadedFiles = {getUploadedFiles}></ImagesUploader> */}
            <hr />
            <FileRegister cref={childRef} getUploadedFiles={getUploadedFiles}></FileRegister>
            <FooterOne />
        </div>
    );
};

export default FundingRegister;
