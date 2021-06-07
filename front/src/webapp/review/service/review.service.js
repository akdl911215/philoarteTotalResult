import axios from 'axios'
import { useRef } from 'react';

const SERVER = 'http://localhost:8080';

const register=(fd)=>{

    console.log(fd)

    return axios.post(`${SERVER}/reviews/register`, fd,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response=>{
        return response.data
    })
}

const list=(pageResult)=>{
    console.log('service hireList pageRequest: ' + JSON.stringify(pageResult));

    const str = "page=" + (!pageResult.page?1:pageResult.page) +"&type="+ (pageResult.type) +"&keyword=" + (pageResult.keyword)
    
    return axios.get(`${SERVER}/reviews/list/pages?` + str)
}

const read=(reviewId)=>{
    return axios.get(`${SERVER}/reviews/read/${reviewId}`)
}

const modify=(review)=>{

    return axios.put(`${SERVER}/reviews/modify/`+review.reviewId, review,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response=>{
        return response.data
})
}

const deletes=(reviewId)=>{
    console.log("Delete Review")
    return axios.delete(`${SERVER}/reviews/remove/${reviewId}`, {data:{...reviewId}})
}

export default{register, list, read, modify, deletes}