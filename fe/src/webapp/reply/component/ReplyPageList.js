import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getReplyList } from '../reducer/reply.reducer'


const ReplyPageList=()=>{

    const {pageList, page, start, end, prev, next} = useSelector(state=>state.replies.pageResult)

    const dispatch = useDispatch()

    console.log(pageList)

    const movePage = (page)=>{
        dispatch(getReplyList(page))
    }

    const listNum = pageList.map(i=><button key={i} onClick={()=>movePage(i)}>{i}</button>)

    return(
        <div>
        {prev ? <button onClick={()=>movePage(start-1)}>prev</button> : <></>}
        {listNum}
        {next ? <button onClick={()=>movePage(end+1)}>next</button> : <></>}
    </div>
    )


}

export default ReplyPageList