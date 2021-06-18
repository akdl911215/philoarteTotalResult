import React from "react";
import logoWhite from "webapp/images/logo-white-full.png";
import logoBlack from "webapp/images/logo-black.png";

const NavbarHeaderTwo = () => (
  <div className="navbar-header">
    <button
      type="button"
      className="navbar-toggle"
      data-toggle="collapse"
      data-target="#navbar-menu"
    >
      <i className="tr-icon ion-android-menu"></i>
    </button>
    <div className="logo">
      <a href={process.env.PUBLIC_URL}>
        <img className="logo logo-display" src={logoWhite} alt="" />
        <img className="logo logo-scrolled" src={logoBlack} alt="" />
      </a>
    </div>
  </div>
);

export default NavbarHeaderTwo;
