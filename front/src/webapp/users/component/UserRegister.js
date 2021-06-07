import React, {useState, useCallback} from 'react'
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios'

import {getUserSignUp} from '../reducer/user.reducer'
import { useDispatch } from 'react-redux';

const UserRegister = () => {
    
    const [input, setInput] = useState({
        username: '',
        password : '',
        name : "",
        email : ""
    })

    const dispatch = useDispatch()
    
    const handleSubmit = useCallback(e => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name]: value
        })
    }, [input])

    

    return (
        <form>
            <table>
                <thead>아래 양식에 맞게 회원 가입을 해주세요</thead>
                <tbody>
                    <tr>
                        <th>
                            아이디
                        </th>
                        <td><input
                            type='text'
                            placeholder='아이디를 입력(10자이내)'
                            name='username'
                            value={input.username}
                            onChange={handleSubmit}/></td>
                    </tr>
                    <tr>
                        <th>
                            비밀번호
                        </th>
                        <td><input
                            type='password'
                            placeholder='비밀번호를 입력하세요'
                            name='password'
                            value={input.password}
                            onChange={handleSubmit}/></td>
                    </tr>
                    <tr>
                        <th>
                            이름
                        </th>
                        <td><input
                            type='text'
                            name='name'
                            value={input.name}
                            onChange={handleSubmit}/></td>
                    </tr>
                    <tr>
                        <th>
                            이메일
                        </th>
                        <td><input
                            type='text'
                            placeholder='이메일을 입력하세요'
                            name='email'
                            value={input.email}
                            onChange={handleSubmit}/></td>
                    </tr>
                    {/* <tr>
                        <th>
                            생년월일
                        </th>
                        <td><input
                            type='text'
                            placeholder='생년월일 입력하세요'
                            name='birthday'
                            value={register.birthday}
                            onChange={handleSubmit}/></td>
                    </tr>
                    <tr>
                        <th>
                            성별
                        </th>
                        <td>
                            <select name="gender" value={register.gender} onChange={handleSubmit}>
                                <option value="남성">남성</option>
                                <option value="여성">여성</option>
                            </select>
                        </td>
                    </tr> */}
                    <tr>
                        <td>
                            <input type='button' onClick={()=>dispatch(getUserSignUp(input))} value='등록'/>
                        </td>
                        <td>
                            <Link to="/">
                                <button>취소</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default UserRegister;