import axios from 'axios'
import UserRegister from 'users/component/UserRegister'
import { useHistory } from "react-router-dom";
import UserLogin from 'users/component/UserLogin';


const findAll=()=>{
    return axios.get("http://localhost:8080/users/findAll")
}

const signUp = (input) => {
        axios({
            url: `http://localhost:8080/users/signup`,
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'JWT fefege..' },
            data: input
            })
        }
    


const login=(login)=>{
    return axios({
        url: `http://localhost:8080/users/signin`,
        method : 'post',
        headers :{'content-type':'application/json', 'Authorization':'JWT fefege..'},
        data:login
    })
}

 const userEdit = e => {
    e.preventDefault()
    const del = window.confirm("정보를 수정하시겠습니까?")
    if(del){
    axios({
        url: URL+'userId',
        method: 'put',
        headers: {'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem("token")},
        data: {}
    }).then(res => {
        alert(`수정되었습니다.`)
        useHistory.push('/')
        window.location.reload()
    }).catch(err => {
        alert(err)
    })}
}

const userDelete = e => {
    e.preventDefault()
    const del = window.confirm("정말 탈퇴하시겠습니까?")
    if(del){
    axios({
        url: URL+'userId',
        method: 'delete',
        headers: {'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem("token")}
    }).then(res => {
        alert(`탈퇴되었습니다.`)
        localStorage.removeItem("cartuser")
        localStorage.removeItem("token")
        useHistory.push('/')
    }).catch(err => {
        alert(err)
    })}
}

export default {findAll, signUp, login, userEdit, userDelete}
