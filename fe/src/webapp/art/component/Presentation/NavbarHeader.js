import React from "react";
import logoWhite from "webapp/images/logo-white.png";
import logoBlack from "webapp/images/logo-black.png";

const NavbarHeader = () => (
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
    </div>
  </div>
);

export default NavbarHeader;
