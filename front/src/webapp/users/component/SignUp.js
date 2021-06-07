//import '../component/signupForm.css';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
const SignUp = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        userEmail: '',
    });

    const {username, password, userEmail} = inputs
    
    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setInputs({ 
                ...inputs, 
                [name]: value
            });
        },
        [inputs]
    );
    const handleSubmit = useCallback(
        (e) => {
            alert('회원가입 버튼누름');
            e.preventDefault();
            console.log('작동');
            axios
                .post('http://localhost:8080/users/insert', {
                    username,
                    password,
                    userEmail,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        },
        [username, password, userEmail]
    );
    return (
        <form onSubmit={handleSubmit} method="post">
            <div className="signUpContainer">
                <h1>회원가입</h1>
                <hr />
                <label htmlFor="username">
                    <b>아이디</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="Username" name="username" value={username} required />
                <label htmlFor="password">
                    <b>비밀번호</b>
                </label>
                <input type="password" onChange={handleChange} placeholder="Password" name="password" value={password} required />
                <label htmlFor="userEmail">
                    <b>Email</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserEmail" name="userEmail" value={userEmail} required />
                <div className="clearfix">
                    <button type="button" className="cancelButton">
                        Cancel
                    </button>
                    <button type="submit" className="signupButton">
                        회원가입 버튼
                    </button>
                </div>
            </div>
        </form>
    );
};
export default SignUp;