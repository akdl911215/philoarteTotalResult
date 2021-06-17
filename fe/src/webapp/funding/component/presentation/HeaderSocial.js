import React from 'react';
import HandleFixedNavbar from 'webapp/art/component/Presentation/HandleFixedNavbar';
import SideNav from '../../art/component/Presentation/SideNav';
import SearchOverlay from '../../art/component/Presentation/SearchOverlay';
import Navbar from '../../art/component/Presentation/Navbar';
import NavbarHeader from '../../art/component/Presentation/NavbarHeader';
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
