import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch, searchResume } from 'webapp/resume/reducer/resume.reducer';
import Icofont from 'react-icofont';
import 'webapp/resume/css/SearchCss.css';

const SearchBar = () => {
    const searchList = useSelector((state) => state.resumes.pageResult);
    const dispatch = useDispatch();
    const [search, setSearch] = useState({
        type: '',
        keyword: '',
    });

    const handleChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { name, value } = e.target;
        setSearch({ ...search, [name]: value });
    };

    const onClick = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const pageNum = 1;
        const param = { type: search.type, keyword: search.keyword, page: pageNum };
        dispatch(changeSearch(param));
        await dispatch(searchResume(param));
    };

    const handlePress = (e) => {
        if (e.key === 'Enter') {
            onClick(e);
        }
    };
    const refreshSearch = async () => {
        setSearch({ type: '', keyword: '' });
        dispatch(changeSearch(search));
        await window.location.reload();
    };
    return (
        <>
            <form role="search" className="text-center search_bar">
                <select type="search" className="search-select" name="type" value={search.type} onChange={(e) => handleChange(e)}>
                    <option value="">검색어를 선택해주세요</option>
                    <option value="u">아이디</option>
                    <option value="n">작성자</option>
                    <option value="c">카테고리</option>
                    <option value="t">제목</option>
                    <option value="d">내용</option>
                </select>
                <input className="md-input search-input" type="select" style={{ color: 'black' }} placeholder="검색어를 입력하세요" name="keyword" value={search.keyword} onChange={(e) => handleChange(e)} onKeyPress={(e) => handlePress(e)} />
                <button className="btn search-button" onClick={(e) => onClick(e)}>
                    SEARCH
                    <Icofont icon="icofont-ui-search" className="ml-5 xs-display-none" />
                </button>
                {search.type || search.keyword ? (
                    <button className="btn search-button" onClick={() => refreshSearch()}>
                        REFRESH
                        <Icofont icon="icofont-refresh" className="ml-5 xs-display-none" />
                    </button>
                ) : (
                    <></>
                )}
            </form>
        </>
    );
};

export default SearchBar;
