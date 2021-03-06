import React, { useState, useCallback, useEffect, useRef} from 'react'
import HeaderSocial from 'webapp/common/Header/HeaderSocial'
import dataNavbar from "webapp/common/data/Navbar/main-navbar-data.json";
import HomeMarketingSlider from "webapp/funding/component/showing/HeroMarketing";
import FooterOne from "webapp/common/Footer/FooterOne";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateFunding, deleteFile, getFundingDetail} from 'webapp/funding/reducer/funding.reducer'
import { Button,Grid, MenuItem, TextField } from '@material-ui/core';
import FileRegister from './register/FileRegister';
import axios from 'axios';
import HeaderOneMain from 'webapp/common/component/Navbar/HeaderOneMain';
const FundingUpdate = () =>{
    const dispatch = useDispatch()
    const param = useSelector(state => state.fundings.current)
    const {update}=useParams()
    const childRef = useRef()

    let uploadedFiles = null

    const [data, setUpdate] = useState({
        fundingId: param.fundingId,
        title:param.title,
        content: param.content,
        goalPrice: param.goalPrice,
        hashtag : param.hashtag,
        fundingFiles: uploadedFiles
    })
    const handleChange =useCallback((e)=>{
      const {name, value} = e.target;
        setUpdate({
          ...data,
          [name]:value
        })
        console.log(JSON.stringify(data))
    });

    const getUploadedFiles = (uplodedFilesResult) => {
        
        uploadedFiles = uplodedFilesResult
        data.fundingFiles = uploadedFiles
    }
useEffect(()=>{
    getFundingDetail(update)
    const fetchData = async() =>{
        const result = await axios(`http://localhost:8080/funding/${update}`);
        setUpdate(result.data)   
}
fetchData();
},[])

   const fundingId = param.fundingId

   const subMit = (e) =>{
       e.preventDefault()
       e.stopPropagation()
       childRef.current.send()
       dispatch(updateFunding({fundingId, data}))
       window.location.href=`/funding/list`
   }
const ondelete=async(id)=>{
    dispatch(deleteFile(id))
    alert("?????????????????????.")
    window.location.reload()
}
const hashtags = [
    {
        value:'??????',
        label:'??????'
    },
    {
        value:'??????',
        label:'??????'
    },
    {
        value:'??????',
        label:'??????'
    },
    {
        value:'??????',
        label:'??????'
    },
    {
        value:'??????',
        label:'??????'
    }

] 

const numberWithComma = (number) =>(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
let num = (param.goalPrice)
    return(
        <>
        <HeaderOneMain />
              <HomeMarketingSlider/>
        <form>
        <h1> ??? ??? ??? ??? ??? ???</h1>
        <div className="container">
        
        <div className="card col-md-8 offset-md-3" >
            
          <div> 
          <label className="form-label"> * NO </label>
         
          <textarea className="form-control"  rows="1" style={{color:"black"}}value={data.fundingId} name="fundingId" readOnly></textarea> 
          </div>
          <div> 
          <label className="form-label"> * ?????? </label>
          <textarea className="form-control"  rows="1" style={{color:"black"}}value={data.title} name="title"  onChange={handleChange} ></textarea> 
          </div>
          <div> 
          <label className="form-label"> * ?????? </label>
          <textarea className="form-control"  rows="3" style={{color:"black"}}value={data.content} name="content" onChange={handleChange} ></textarea> 
          </div>
          <div> 
          <label className="form-label"> * ???????????? </label>
          <textarea className="form-control"  rows="1" style={{color:"black"}} value={data.goalPrice} name="goalPrice" onChange={handleChange} ></textarea> 
          </div>
          <div> 
          <Grid item sm ={3}>
                <TextField
                select
                label="Select Hashtag"
                value={data.hashtag}
                onChange={handleChange} 
                name="hashtag"
                helperText="Please select your Funding Hashtag"
                variant="filled"
                >
                {hashtags.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            </Grid>
            {/* <ImagesUploader></ImagesUploader> */}
            <hr/>
            <div>
            {data.fundingFiles?.map((image,i)=>(
                <Grid item xs={12} >
                    <img src={`http://localhost:8080/funding_file/display?fileName=${image.uuid}_${image.fname}`} style={{height:"20%", width:"20%"}} />
                    <button type="button" id="btn" onClick={()=>ondelete(image.fundingFileId)}>?????? ??????</button>
                </Grid>
                )
            )}
            </div>
            {/* ()=>dispatch(deleteFile(image.fundingFileId)) */}
            <hr/>
            <div>????????? ??????</div>
            <FileRegister cref={childRef} getUploadedFiles = {getUploadedFiles}></FileRegister>
            
            </div>
            <hr/>
         
                <Button variant="outlined"
                  size="large"
                  color="primary" onClick={(e)=>subMit(e)}>SUBMIT</Button>
           
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/funding/list"}>
          <Button variant="outlined"
                  size="large"
                  color="primary">???????????? ???????????????</Button>
          </Link>
          </div>
          </div>
          
    </form>
    <hr/>
<FooterOne />
        </>
    )
            }
export default FundingUpdate