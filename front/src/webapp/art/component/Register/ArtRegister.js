import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// DATA Files
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
// Components
import HeaderOne from 'webapp/common/Header/HeaderOne';
import FooterOne from 'webapp/common/Footer/FooterOne';
import { PageTitleArt, ArtUpload } from 'webapp/art';

import { getArtRegister, getCategoryList } from 'webapp/art/reducer/art.reducer';

import 'webapp/art/style/Art.css';

const ArtRegister = ({ tagline, title, backfont, dash, textBtn, classes }) => {
    const fileList = useSelector((state) => state.arts.fileList);
    const categories = useSelector((state) => state.arts.category);

    console.log('first', fileList);

    const titleRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCategoryList());
    }, []);

    const ArtRegister = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const art = {
            title: titleRef.current.value,
            category: { categoryId: Number(categoryRef.current.value) },
            description: descriptionRef.current.value,
            mainImg: 'http://www.yck.kr/_data/file/bbsData/86d2f471ffc196ee508845737375d38d.jpg',
            artist: { artistId: 333 }, // 아티스트 정보 가져올 곳
            resume: { resumeId: 10 }, // 레쥬메 정보 가져올 곳
        };

        const data = { ...art, files: fileList };

        dispatch(getArtRegister(data));

        history.push('/art/list');
    };

    return (
        <>
            <HeaderOne data={dataNavbar} />
            <PageTitleArt title="작품 등록" />

            <section className={'pt-0 pb-0 transition-none ' + classes} id="contact">
                <div className="col-md-6 col-sm-4 ">
                    <div className="pt-50 pb-70 pl-70 pr-70 xs-pt-20 xs-pb-80 ">
                        <ArtUpload />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-md-5 col-sm-7 pt-50 pb-70 pl-70 pr-70 xs-pt-20 xs-pb-80">
                        <form name="art-register-form" id="art-register-form" method="POST" className="contact-form-style-02" onSubmit={ArtRegister}>
                            <div className="messages"></div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="title" className="dark-color">
                                            작품명
                                        </label>
                                        <input type="text" name="title" className="md-input style-02 input_white" id="title" required data-error="작품명을 입력하세요." ref={titleRef} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="category" className="dark-color">
                                            카테고리
                                        </label>
                                        <select type="number" name="category" className="md-input style-02 sel_arrow input_white" id="category" required data-error="카테고리를 선택해주세요." ref={categoryRef}>
                                            <option value="">카테고리</option>
                                            {categories.map((category) => {
                                                return (
                                                    <option key={category.categoryId} value={category.categoryId}>
                                                        {category.categoryName}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="description" className="dark-color">
                                            설명
                                        </label>
                                        <textarea name="description" className="md-textarea style-02 input_white" id="description" rows="7" required data-error="작품에 대한 설명을 입력해주세요." ref={descriptionRef} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="text-center mt-20">
                                        <button type="submit" name="submit" className="btn btn-xl btn-color btn-square remove-margin" style={{ width: '50%' }}>
                                            등록하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <FooterOne />
        </>
    );
};

export default ArtRegister;
