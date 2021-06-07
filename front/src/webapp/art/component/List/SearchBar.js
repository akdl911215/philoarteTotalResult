import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { changeSearch, getArtSearch } from 'webapp/art/reducer/art.reducer';

const SearchBar = () => {
    const typeRef = useRef();
    const keywordRef = useRef();

    const dispatch = useDispatch();

    const handleClick = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        const param = {
            type: typeRef.current.value,
            keyword: keywordRef.current.value,
            page: 1,
        };

        console.log(param);

        dispatch(changeSearch(param));
        await dispatch(getArtSearch(param));
    };

    return (
        <form role="search" className="text-center search-bar" onSubmit={(e) => e.preventDefault()}>
            <select type="text" name="type" className="md-input sel_arrow search-select" id="type" ref={typeRef}>
                <option value="">선택</option>
                <option value="u">아이디</option>
                <option value="n">이름</option>
                <option value="c">카테고리</option>
                <option value="t">제목</option>
                <option value="d">설명</option>
                <option value="td">제목 + 설명</option>
            </select>
            <input type="select" name="keyword" className="md-input search-input" id="keyword" placeholder="검색어를 입력하세요." ref={keywordRef} />
            <input type="submit" className="btn btn-lg btn-color btn-square remove-margin search-button" onClick={(e) => handleClick(e)} value={'검색'} />
        </form>
    );
};

export default SearchBar;
