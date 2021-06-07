import React, { useEffect, useState } from 'react';
// DATA Files
import dataNavLogin from 'webapp/common/data/Navbar/main-navbar-login.json';
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';

// components
import HeaderOne from 'webapp/common/Header/HeaderOne';

import Signin from 'webapp/artist/component/Signin';

import { getLocalArtist } from 'webapp/artist/reducer/artist.reducer';

const HeaderOneMain = () => {
    useEffect(() => {
        getLocalArtist();
    }, []);
    // const guestArtist = this.state.guest;
    const [isLogin, setisLogin] = useState({});
    const [LoginButton, setLoginButton] = useState({});
    const [LogoutButton, setLogoutButton] = useState({});

    console.log('isLogin :::::: ' + isLogin);
    console.log('JSON.stringify(isLogin) :::::: ' + JSON.stringify(isLogin));
    console.log('setisLogin :::::: ' + setisLogin);
    console.log('JSON.stringify(setisLogin) :::::: ' + JSON.stringify(setisLogin));
    console.log('LoginButton :::::: ' + LoginButton);
    console.log('JSON.stringify(LoginButton) :::::: ' + JSON.stringify(LoginButton));
    console.log('setLoginButton :::::: ' + setLoginButton);
    console.log('JSON.stringify(setLoginButton) :::::: ' + JSON.stringify(setLoginButton));
    console.log('LogoutButton :::::: ' + LogoutButton);
    console.log('JSON.stringify(LogoutButton) :::::: ' + JSON.stringify(LogoutButton));
    console.log('setLogoutButton :::::: ' + setLogoutButton);
    console.log('JSON.stringify(setLogoutButton) :::::: ' + JSON.stringify(setLogoutButton));

    // console.log('props.username :::::: ' + Signin.username);
    // console.log('JSON.stringify(loginValue.username) :::::: ' + JSON.stringify(loginValue.username));
    // console.log('props.password :::::: ' + Signin.password);
    // console.log('JSON.stringify(loginValue.password) :::::: ' + JSON.stringify(loginValue.password));
    //<LoginButton onClick={dataNavLogin} /> : <LogoutButton onClick={dataNavbar}

    const loginValue = JSON.parse(localStorage.getItem('artist'));
    console.log('loginValue ::::::::: ', loginValue);

    console.log(' :::::::::::::::::::::::::::::::::::::::::');
    console.log(loginValue);
    return (
        <>
            {/* <h1>Hello</h1> */}
            <div>
                <HeaderOne data={loginValue != null ? dataNavLogin : dataNavbar} />
            </div>
        </>
    );
};
export default HeaderOneMain;
