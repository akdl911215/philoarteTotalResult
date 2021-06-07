import axios from 'axios'
import { useHistory } from 'react-router-dom'

const getList=(page) =>{
    return axios.get("http://localhost:8080/funding/list?page=" +page)
}
const fundingRegister = (data) =>{
    console.log("WLWLWlwkwkwlwlwlwlwlwlwlwlwlwlwlw"+JSON.stringify(data))
    return axios.post("http://localhost:8080/funding/register", data)
}

const showDetail =(fundingId)=>{
    console.log(`디테일보기 서비스 아이템 넘버 : ${fundingId}`)
    return axios.get(`http://localhost:8080/funding/${fundingId}`)
}

const fundingUpdate = (fundingId,data) =>{
    console.log("fundingId :::::"+ fundingId)
    console.log("[SERVICE data :::::", data)
    return axios.put(`http://localhost:8080/funding/edit/${fundingId}`,data)
    .then(res =>{
        return res.data
    })
}
const deleteFunding = (funding) =>{
    // e.preventDefault()
    const del = window.confirm("글 삭제를 진행 하시겠습니까?")
    if(del){
    axios({
        url: `http://localhost:8080/funding/${funding}`,
        method:'DELETE'
    }).then(res =>{
        alert("삭제 완료")
    }).catch(err =>{
        alert("삭제과정에서 에러 발생" +err)
    })}
}
const fileUpload = (formData) => axios.post(`http://localhost:8080/funding_file/upload_file`,formData,
    {headers:{ "Content-Type": "multipart/form-data"}})

const deleteFile = (id) => axios.delete(`http://localhost:8080/funding_file/delete_file/${id}`)

const searchSomething = (page,keyword)=>{
    console.log(JSON.stringify(keyword) + "service search " + JSON.stringify(page))
    return axios.get("http://localhost:8080/funding/list/search",page,keyword)
}
export default {getList, fundingRegister,showDetail,deleteFunding,fundingUpdate,searchSomething,fileUpload,deleteFile}