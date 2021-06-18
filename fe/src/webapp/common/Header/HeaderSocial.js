import React from 'react';
import HandleFixedNavbar from 'webapp/common/helpers/HandleFixedNavbar';
import SideNav from './SideNav';
import SearchOverlay from './SearchOverlay';
import Navbar from './Navbar';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import AttrNavSocial from './Elements/AttrNavSocial';

const HeaderSocial = ({ type, data }) => {
    const { fixed } = HandleFixedNavbar();

    return (
        <nav className={'navbar navbar-default navbar-fixed white bootsnav on no-full menu-center no-border' + (fixed ? '' : ' navbar-transparent')}>
            <SearchOverlay />
            <div className={'container' + (type === 'wide' ? '-fluid' : '')}>
                <AttrNavSocial />
                <NavbarHeader />
                <Navbar data={data} />
            </div>
            <SideNav data={data} />
        </nav>
    );
};

export default HeaderSocial;
