import React from "react";
import HandleSearchOverlay from "../helpers/HandleSearchOverlay";
import HandleSideMenu from "../helpers/HandleSideMenu";
import HandleFixedNavbar from "../helpers/HandleFixedNavbar";
import AttrNav from "./AttrNav";
import SideNav from "./SideNav";
import SearchOverlay from "./SearchOverlay";
import Navbar from "./Navbar";
import NavbarHeader from "./NavbarHeader/NavbarHeader";

const HeaderOne = ({ type, data, border }) => {
  const { show, showSearchForm, hideSearchForm } = HandleSearchOverlay();
  const { side, showSideMenu, hideSideMenu } = HandleSideMenu();
  const { fixed } = HandleFixedNavbar();

  return (
    <nav
      className={
        "navbar navbar-default navbar-fixed white bootsnav on no-full menu-center " +
        (border ? "" : "no-border") + (fixed ? "" : " navbar-transparent")
      }
    >
      <SearchOverlay show={show} onClick={hideSearchForm} />
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <AttrNav
          border={border}
          showSearchForm={showSearchForm}
          showSideMenu={showSideMenu}
        />
        <NavbarHeader />
        <Navbar data={data} />
      </div>
      <SideNav data={data} side={side} hideSideMenu={hideSideMenu} />
    </nav>
  );
};

export default HeaderOne;
