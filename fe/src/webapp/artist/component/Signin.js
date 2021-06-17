import React, { useState } from 'react';
import 'webapp/artist/style/ArtistSignin.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signinPage } from 'webapp/artist/reducer/artist.reducer';

const Signin = () => {
    const [signin, setSignin] = useState({
        username: '',
        password: '',
    });

    const history = useHistory();
    const dispatch = useDispatch();
    const goSignin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(signinPage(signin));
        history.push('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignin({
            ...signin,
            [name]: value,
        });
    };

    const cancelButton = (e) => {
        e.preventDefault();
        window.location = '/';
    };

    return (
        <>
            <div className="headerLoginFrom">
                <h2>로그인(Login)</h2>
            </div>

            <div className="imgcontainer">
                <img src="https://i.pinimg.com/originals/32/99/86/329986c043a5829916d2eb0c3b7fed8c.png" alt="Avatar" className="avatar" />
            </div>
            <div className="container">
                <label htmlFor="username">
                    <b>ID</b>
                </label>
                <input type="text" style={{color:"black"}} placeholder="Enter Username" name="username" value={signin.username || ''} onChange={handleChange} />

                <label htmlFor="password">
                    <b>비밀번호</b>
                </label>
                <input type="password"  style={{color:"black"}}  placeholder="Enter Password" name="password" value={signin.password || ''} onChange={handleChange} />

                <button type="submit" className="artistBtn" onClick={(e) => goSignin(e)}>
                    Login
                </button>
            </div>

            <div className="container ArtistSigninCancel">
                <button type="button" className="cancelbtn" onClick={cancelButton}>
                    Cancel
                </button>
                <span className="psw">
                    Forgot <a href="#">password?</a>
                </span>
            </div>

            <div className="container SupporterSignup">
                <label>
                    <Link to="/artist/artist-signup">
                        <button className="buttonSelect1">서포터 회원가입</button>
                    </Link>
                </label>
                <label>
                    <Link to="/artist/artist-signup">
                        <button className="buttonSelect2">아티스트 회원가입</button>
                    </Link>
                </label>
            </div>
        </>
    );
};
export default Signin;