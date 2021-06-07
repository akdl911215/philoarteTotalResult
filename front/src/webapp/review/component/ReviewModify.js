import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useHistory} from 'react-router-dom';
import { getReviewModify, currentReview, delFileList } from '../reducer/review.reducer';

const ReviewModify = () => {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [files, setFiles] = useState([])
    const [fileSelect, setFileSelect] = useState(false)

    const reviewObj = useSelector(currentReview)

    const dispatch = useDispatch()
    const history = useHistory()

    const reviewFile = reviewObj.reviewFileDtoList

    console.log(reviewFile)

    useEffect(() => {
        setTitle(reviewObj.title)
        setContent(reviewObj.content)
        setFiles(reviewFile)
        setFileSelect(false)
    },[reviewObj])

    const fileModify=async(e)=>{
        let modifyResult = window.confirm("리뷰를 수정하시겠습니까?")
        const obj = {
            reviewId: reviewObj.reviewId, 
             title: title, 
            content: content, 
            writerId: reviewObj.writerId}
        const formData = new FormData()

        console.log(files)
        if(fileSelect){
            for(let i=0; i<files.length; i++){
                formData.append("files["+i+"]", files[i])
            }
        }
        formData.append("fileSelect", fileSelect)
        formData.append("title", obj.title)
        formData.append("content", obj.content)
        formData.append("reviewId", obj.reviewId)
        formData.append("writerId", obj.writerId)
        
        if(modifyResult){
            await dispatch(getReviewModify(formData))
            alert("리뷰 수정 완료!")
            setFiles(null)
            history.push(`/reviews/review_read/${reviewObj.reviewId}`)
        }
      
    }


    const reviewFileDelete=(e)=>{
        e.stopPropagation()
        e.preventDefault()
        dispatch(delFileList(reviewFile))
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleChangeFile=(e)=>{
        const fileObj = e.target
        console.dir(fileObj.files)
        setFiles(fileObj.files)
        setFileSelect(true)
    }
    

    return (
                 <div className="white-bg">
        <div className="container">
    <div id="respond" className="comment-respond">
              <h1 className="section-title text-center">Review Modify</h1>
              <hr className="center_line default-bg" style={{marginBottom:"50px"}}/>

              <div className="row-form row" >
           <div className="col-form col-md-2">
            <label> * writerName </label>
            <textarea  style={{color:"black",marginBottom:"-45px", border:"1px solid #9e9e9eb5"}} value={reviewObj.writerName} name="writerName" readOnly></textarea> 
            </div>
            </div>
               </div>
        
        <div className="row-form row">
            <div className="col-form col-md-5">
            <label> * Title </label>
            <textarea name="title" style={{color:"black" ,marginBottom:"30px", border:"1px solid #9e9e9eb5"}} className="md-textarea" id="title" rows="2"
                  placeholder="제목을 수정하세요"
                  value={title}
                  onChange={(e) => handleChangeTitle(e)}
                ></textarea>
            </div>
        </div>

        <div className="row-form row">
            <div className="col-form col-md-12">
            <label> * Content </label>
            <textarea
                  name="content"
                  style={{color:"black", marginBottom:"30px", border:"1px solid #9e9e9eb5"}}
                  rows="10"
                  placeholder="내용을 수정하세요 *"
                  value={content}
                  onChange={(e) => handleChangeContent(e)}
                ></textarea>
            </div>
        </div>

        <div className="row-form row">
        <button className="btn btn-success btn-md btn-default remove-margin pull-right" style={{}}
         data-uuid={reviewFile.uuid} onClick={(e)=>reviewFileDelete(e)}>
        Upload Cancel</button>
            <div className="col-form col-md-7">
                <label className="input-file-button " for="input-file">Upload</label>
                    <input type="file" name="file" id="input-file" style={{display:"none"}} multiple={true} onChange={(e) =>handleChangeFile(e)}/>
            </div>
        </div>
        
        <div style={{marginTop:"50px"}}>
            
        <button className="btn btn-success btn-md btn-default remove-margin pull-right" onClick={fileModify} >Modify</button>
        < Link to = {`/reviews/review_read/${reviewObj.reviewId}`} > 
        <button className="btn btn-color btn-md btn-default remove-margin" >Cancel</button> </Link>
        </div>
        
        <div className="display-flex" style={{marginBottom:"50px", marginTop:"50px",  justifyContent:"center"}}>
                            <>
                        { reviewFile && reviewFile[0] ? reviewFile?.map((file,i)=>{
                                return(
                                    <div key={file.uuid}> <img src={"http://localhost:8080/review_files/display?imgName="+"s_"+file.uuid+file.imgName}/>
                                      </div>
                                )
                            }) :<></>}
                               </>
                        </div>  
        </div>  
            </div>
    )
}

export default ReviewModify