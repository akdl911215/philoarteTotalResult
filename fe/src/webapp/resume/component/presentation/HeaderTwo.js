import React from "react";
import HandleSearchOverlay from "webapp/art/component/Presentation/HandleSearchOverlay";
import HandleSideMenu from "webapp/art/component/Presentation/HandleSideMenu";
import HandleFixedNavbar from "webapp/art/component/Presentation/HandleFixedNavbar";
import AttrNav from "../../../art/component/Presentation/AttrNav";
import SideNav from "../../../art/component/Presentation/SideNav";
import SearchOverlay from "../../../art/component/Presentation/SearchOverlay";
import Navbar from "../../../art/component/Presentation/Navbar";
import NavbarHeaderTwo from "../../../common/Header/NavbarHeader/NavbarHeaderTwo";

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
