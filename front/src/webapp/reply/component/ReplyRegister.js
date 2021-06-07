  
import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { currentReview, getReviewRead} from 'webapp/review/reducer/review.reducer'
import { getReplyRegister } from '../reducer/reply.reducer'

const ReplyRegister=()=>{
    const reviewObj = useSelector(currentReview)

    const [input, setInput] = useState({
        text : '',
        replyer : '',
        uuid: "",
        path: "",
        imgName : "",
        reviewId:reviewObj.reviewId
    })

    const [files, setFiles] = useState([])

    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }
    const dispatch = useDispatch()

    const history = useHistory()

    const fetchRead =()=>{
      dispatch(getReviewRead(reviewObj.reviewId))
  }
    const register =async(e)=>{
      e.preventDefault()
      e.stopPropagation()
      const formData = new FormData()
      for(let i = 0; i<files.length; i++){
        formData.append("replyFiles["+i+"]", files[i]) 
      } 
      formData.append("path", input.path)
      formData.append("imgName", input.imgName)
      formData.append("uuid", input.uuid)
      formData.append("text", input.text)
      formData.append("replyer", input.replyer)
      formData.append("reviewId", input.reviewId)
      await dispatch(getReplyRegister(formData))
      history.replace(`/reviews/review_read/${input.reviewId}`)
    
    }

    useEffect(() => {
      fetchRead()
   },[])

    const handleSubmit =(e) => {
        console.log(e.target.name, e.target.value)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
  
    const handleUpload=(e)=>{
      const fileObj = e.target
      console.dir(fileObj.files)
      setFiles(fileObj.files)
    }
    
return (

<section className="white-bg" style={{marginTop:"-100px", marginBottom:"auto"}}>
  <div  className = "container">
    <div id="respond" className="comment-respond">

        <h1 className="section-title text-center" >Reply Regist</h1>
        <hr className="center_line default-bg" style={{marginBottom:"70px"}}/>

        <div className="row-form row">
          <div className="col-form col-md-2">
                <input
                    style={{color:"black", marginBottom:"30px", border:"1px solid #9e9e9eb5"}}
                    type="text"
                    name="reviewId"
                    placeholder="reviewId *"
                    value={input?.reviewId}
                    onChange={(e) => handleSubmit(e)}
                />
          </div>
              </div>

          <div className="row-form row">
              <div className="col-form col-md-3">
                    <input
                      style={{color:"black", marginBottom:"30px", border:"1px solid #9e9e9eb5"}}
                      type="text"
                      name="replyer"
                      placeholder="이름을 입력해주세요 *"
                      value={input?.replyer}
                      onChange={(e) => handleSubmit(e)}
                    />
          </div>
            </div>

          <div className="row-form row">
            <div className="col-form col-md-12">
                <textarea
                  style={{color:"black", marginBottom:"30px", border:"1px solid #9e9e9eb5"}}
                  name="text"
                  rows="10"
                  placeholder="댓글을 입력해주세요 *"
                  value={input?.text}
                  onChange={(e) => handleSubmit(e)}
                  ></textarea>

                      <label className="input-file-button " style={{marginBottom:"35px"}} for="input-file">Upload</label>
                    <input type="file" name="file" id="input-file" style={{display:"none"}} multiple={true} onChange={(e) =>handleUpload(e)}/>

                </div>
                </div>
                    <div>
                    <button className="btn btn-success btn-md btn-default remove-margin pull-right" onClick={register}>Register</button>
                    <Link to ={`/reviews/review_read/${reviewObj.reviewId}`}>
                                 <button className="btn btn-color btn-md btn-default"
                                 >Cancel</button>
                            </Link>
                    </div>
  
        </div>
        </div>
      </section>
        
    );
}

export default ReplyRegister