import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {getUserList} from '../reducer/user.reducer'

const UserList = () => {

    const users = useSelector(state=>{
        console.log("state: " + JSON.stringify(state.users))
        return state.users
    })

   const dispatch = useDispatch()

   useEffect(() => {
       dispatch(getUserList())
   },[])

    return (
        <>    <h1>사용자 목록</h1>
         <table>
            <tr>
                <td>No</td>
                <td>아이디</td>
                <td>이메일</td>
                <td>이름</td>
                <td>회원여부</td>
            </tr>
   
             {
                users.map((user, id) => {
                    return (
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.roles}</td>
                        </tr>
                    )
                })
            }
    </table><br/>
</>
    )
        }

export default UserList