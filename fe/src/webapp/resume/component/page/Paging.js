import React, { useState } from "react";
import Icofont from "react-icofont";
import { useDispatch, useSelector } from "react-redux";
import {changeSearch, listResume, searchResume} from "webapp/resume/reducer/resume.reducer";

const PageList = () => {

    const {pageList, start, end, prev, next} = useSelector(state => state.resumes.pageResult)
    const searchType = useSelector(state => state.resumes.type)
    const searchKeyword = useSelector(state => state.resumes.keyword)

    const dispatch = useDispatch();
 

    const movePage = (page) => {
      const param = {type: searchType, keyword: searchKeyword, page: page}
      return (!searchType && !searchKeyword ) ? dispatch(listResume(page)) : dispatch(searchResume(param))
    }

    console.log("searchCondition: ",searchKeyword + searchType)

    const list = pageList.map(i => <button className="btn" key={i} onClick={() => movePage(i)}> {i} </button>)
    return (<>


      <div className="row mt-20"style={{marginBottom: "20px"}}>
        <div className="text-center">
          {prev? <button className="btn" onClick={() => movePage(start -1)} >
          <Icofont icon="long-arrow-left" className="mr-5 xs-display-none"/>
            PREV
          </button> : <></>}
            {list}
          

          
        </div>
      </div>
    </>);
}
 
export default PageList;