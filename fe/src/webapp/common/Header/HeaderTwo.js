import React from "react";
import HandleSearchOverlay from "webapp/common/helpers/HandleSearchOverlay";
import HandleSideMenu from "webapp/common/helpers/HandleSideMenu";
import HandleFixedNavbar from "webapp/common/helpers/HandleFixedNavbar";
import AttrNav from "./AttrNav";
import SideNav from "./SideNav";
import SearchOverlay from "./SearchOverlay";
import Navbar from "./Navbar";
import NavbarHeaderTwo from "./NavbarHeader/NavbarHeaderTwo";

const HeaderTwo = ({ type, data }) => {
  const { show, showSearchForm, hideSearchForm } = HandleSearchOverlay();
  const { side, showSideMenu, hideSideMenu } = HandleSideMenu();
  const { fixed } = HandleFixedNavbar();

  return (
    <nav
      className={
        "navbar navbar-default navbar-fixed white bootsnav on no-full menu-center no-border" +
        (fixed ? "" : " navbar-transparent")
      }
    >
      <SearchOverlay show={show} onClick={hideSearchForm} />
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <AttrNav showSearchForm={showSearchForm} showSideMenu={showSideMenu} />
        <NavbarHeaderTwo />
        <Navbar data={data} />
      </div>
      <SideNav data={data} side={side} hideSideMenu={hideSideMenu} />
    </nav>
  );
};

export default HeaderTwo;
