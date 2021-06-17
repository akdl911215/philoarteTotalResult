import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPage, changeSearch } from 'webapp/artist/reducer/artist.reducer';
import 'webapp/artist/style/ArtistPageSearch.css';
import { useHistory } from 'react-router';

const ArtistPageSearch = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const refType = useRef();
    const refKeyword = useRef();

    const goSearch = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const typeStr = refType.current.value;
        const keywordStr = refKeyword.current.value;
        const pageNum = 1;
        const param = { type: typeStr, keyword: keywordStr, page: pageNum };
        await dispatch(fetchPage(param));
        dispatch(changeSearch(param));
    };

    const goHome = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push('/');
    };

    const formSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <>
            <form onSubmit={(e) => formSubmit(e)} className="search - form">
                <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                        <div style={{ display: 'inline-table' }} className="form-control focus-rest pl31">
                            <select className="form-control focus-reset pl-13" type="text" style={{ color: 'black' }} ref={refType}>
                                <option value="unesd">통합검색</option>
                                <option value="u">아이디</option>
                                <option value="n">이름</option>
                                <option value="e">E-mail</option>
                                <option value="s">학교</option>
                                <option value="d">학과</option>
                            </select>
                            <input className="form-control focus-reset pl-13" type="text" name="keyword" ref={refKeyword} placeholder="검색어를 입력하세요" />
                            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                                <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                            </span>
                            <button onClick={(e) => goSearch(e)} className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase pull-right">
                                Search
                            </button>
                            <button className="btn btn-success pull-left" onClick={(e) => goHome(e)}>
                                홈으로
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
export default ArtistPageSearch;
