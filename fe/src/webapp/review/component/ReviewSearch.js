import React, { useRef } from 'react';
import Icofont from 'react-icofont';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeSearch, getReviewList } from '../reducer/review.reducer';

const ReviewSearch =()=>{
    const refType = useRef()
    const refKeyword = useRef()

    const dispatch = useDispatch()

    const clickSearch = async () => {
       
        const typeStr = refType.current.value
        const keywordStr = refKeyword.current.value;    
        const pageNum = 1

        const param = {type:typeStr, keyword: keywordStr, page:pageNum}
        
            await dispatch(getReviewList(param))
            dispatch(changeSearch(param))
    }

    const clickList=()=>{
        dispatch(getReviewList(1))
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="search-form">

            <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">

                <div className="filter-inputs">

                    <div style={{display:"inline-table"}} className="form-control focus-reset pl-13">

                        <select className="form-control focus-reset pl-13" type='text' style={{color : "black", display:"none"}} ref={refType}>
                            
                            {/* <option value="t">제목</option>
                            <option value="w">작성자</option>
                            <option value="c">내용</option>
                            <option value="tw">제목+작성자</option> */}

                            <option value="twc">제목+작성자+내용</option>
                        
                        </select>

                        <input
                            className="form-control focus-reset pl-13"
                            type="text"
                            name="keyword"
                            ref ={refKeyword}
                            style={{border:"1px solid #9e9e9e", background:"white"}}
                            placeholder="검색으로 내가 응원하는 아티스트의 리뷰를 찾아보세요"/>

                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                            <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>

                      <div className="post-tags pull-right" >
                          <Link  onClick={() => clickSearch()}>검색 <Icofont icon="icofont-search-2"/></Link>
                      </div>

                      <div className="post-tags pull-left" >
                          <Link onClick={clickList}>새로고침 <Icofont icon="icofont-refresh"/></Link>
                      </div>

                    </div>
                </div>
            </div>
        </form>
    );
};
export default ReviewSearch