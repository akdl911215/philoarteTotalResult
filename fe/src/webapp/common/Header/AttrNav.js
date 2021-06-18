import React from "react";
import Icofont from "react-icofont";

const AttrNav = ({ border, showSearchForm, showSideMenu }) => (
  <div
    className={
      "attr-nav hidden-xs sm-display-none " + (border ? "left-border" : null)
    }
  >
    <ul>
      <li className="side-menu">
        <a href="!#" onClick={showSideMenu}>
          <Icofont icon="navigation-menu" />
        </a>
      </li>
      <li className="search">
        <a href="!#" id="search-button" onClick={showSearchForm}>
          <Icofont icon="search" />
        </a>
      </li>
    </ul>
  </div>
);

export default AttrNav;
