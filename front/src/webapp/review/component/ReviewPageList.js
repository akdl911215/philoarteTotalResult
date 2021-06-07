import React from 'react'
import Icofont from 'react-icofont'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {getReviewList} from 'webapp/review/reducer/review.reducer'

const ReviewPageList=()=>{
    const {pageList, page, start, end, prev, next} = useSelector(state=>state.reviews.pageResult)

    const searchType = useSelector(state=>state.reviews.type)
    const searchKeyword = useSelector(state=>state.reviews.keyword)

    const dispatch = useDispatch()

    const movePage = (page)=>{

        const param = {type:searchType, keyword: searchKeyword, page:page}

        console.log(param)

        dispatch(getReviewList(param))
    }

    const list = pageList.map(i => <button className="btn" key={i} onClick={() => movePage(i)}> {i} </button>)

    return(
        <div style={{marginBottom:"100px"}}>
        <div className="my-auto mx-auto text-center">
          <div className="row mt-100">
            <div className="col-md-12">
              <div className="text-center">
                <div className="pagination dark-color">
                  <ul>
                    <li>
                      {prev? <Link onClick={() => movePage(start -1)} >
          <Icofont icon="long-arrow-left" className="mr-5 xs-display-none"/> prev
          </Link> : <></>}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {prev? <button className="btn" onClick={() => movePage(start -1)} >
          <Icofont icon="long-arrow-left" className="mr-5 xs-display-none"/> prev
          </button> : <></>}
            {list}
          {next? <button className="btn " onClick={() => movePage(end + 1)} >
       next <Icofont icon="long-arrow-right" className="ml-5 xs-display-none"/>
          </button> : <></>}
        </div>
      </div>
      

    )


}

export default ReviewPageList