import React from 'react';
import { fetchPage, changeSearch } from 'webapp/artist/reducer/artist.reducer';
import { useDispatch } from 'react-redux';

const PageList = ({ pageList, page, start, end, prev, next, type = '', keyword = '' }) => {
    const dispatch = useDispatch();
    const movePage = (page) => {
        const param = { page: page, keyword: keyword, type: type }; //keyword: keyword, page: page
        dispatch(fetchPage(param));
        dispatch(changeSearch(param));
    };

    const list = pageList.map((i) => (
        <button key={i} classsName="PageListBtn" onClick={() => movePage(i)}>
            {i}
        </button>
    ));

    return (
        <>
            {prev ? (
                <button className="PageListBtn" onClick={() => movePage(start - 1)}>
                    prev
                </button>
            ) : (
                <></>
            )}
            {list}
            {next ? (
                <button className="PageListBtn" onClick={() => movePage(end + 1)}>
                    next
                </button>
            ) : (
                <></>
            )}
        </>
    );
};
export default PageList;
