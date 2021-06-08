import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
    const artistState = useSelector((state) => state.artists.artistsState);
    return (
        <>
            <div>
                <HeaderOne data={artistState.username != undefined && artistState.username != '' ? dataNavLogin : dataNavbar} />
            </div>
        </>
    );
};
export default HeaderOneMain;
