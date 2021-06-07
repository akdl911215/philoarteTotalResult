import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
// DATA Files
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';
// Components
import HeaderOne from 'webapp/common/Header/HeaderOne';
import FooterOne from 'webapp/common/Footer/FooterOne';
import { PageTitleArt, ModifyUpload } from 'webapp/art';

import { getArtModify, getArtRead, getCategoryList } from 'webapp/art/reducer/art.reducer';

const ArtModify = ({ tagline, title, backfont, dash, textBtn, classes }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();

    const art = useSelector((state) => state.arts.current); // 작품 정보
    const fileList = useSelector((state) => state.arts.fileList); // 파일 리스트
    const categories = useSelector((state) => state.arts.category); // 카테고리 목록

    useEffect(() => {
        dispatch(getArtRead(id));
        dispatch(getCategoryList());
    }, []);

    console.log(fileList);

    const [input, setInput] = useState({
        artId: art?.artId,
        title: art?.title,
        category: { categoryId: art?.category.categoryId },
        description: art?.description,
        artist: art?.artist,
        resume: art?.resume,
    });

    const handleChange = (e) => {
        e.stopPropagation();
        e.preventDefault();

        input[e.target.name] = e.target.value;
        setInput({ ...input });
    };

    const categoryChange = (e) => {
        e.stopPropagation();
        e.preventDefault();

        input.category.categoryId = Number(e.target.value);
        setInput({ ...input });
    };

    const ArtModify = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const data = { ...input, files: fileList };
        dispatch(getArtModify(data));

        history.push('/art/list');
    };

    return (
        <>
            <HeaderOne data={dataNavbar} />
            <PageTitleArt title="작품 수정" />

            <section className={'pt-0 pb-0 transition-none ' + classes} id="contact">
                <div className="col-md-6 col-sm-4 ">
                    <div className="pt-50 pb-70 pl-70 pr-70 xs-pt-20 xs-pb-80 ">
                        <ModifyUpload />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-md-5 col-sm-7 pt-50 pb-70 pl-70 pr-70 xs-pt-20 xs-pb-80">
                        <form name="art-modify-form" id="art-modify-form" method="POST" className="contact-form-style-02" onSubmit={ArtModify}>
                            <div className="messages"></div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="title" className="dark-color">
                                            작품명
                                        </label>
                                        <input type="text" name="title" className="md-input style-02 input_white" id="title" required data-error="작품명을 입력하세요." value={input?.title} onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="category" className="dark-color">
                                            카테고리
                                        </label>
                                        <select type="number" name="category" className="md-input style-02 sel_arrow input_white" id="category" required data-error="카테고리를 선택해주세요." onChange={(e) => categoryChange(e)}>
                                            <option value={art?.category.categoryId}>{art?.category.categoryName}</option>
                                            {categories
                                                .filter((category) => category.categoryId !== art?.category.categoryId)
                                                .map((category) => {
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
                                        <textarea name="description" className="md-textarea style-02 input_white" id="description" rows="7" required data-error="작품에 대한 설명을 입력해주세요." value={input.description} onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="text-center mt-20">
                                        <button type="submit" name="submit" className="btn btn-xl btn-color btn-square remove-margin" style={{ width: '50%' }}>
                                            수정하기
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

export default ArtModify;
