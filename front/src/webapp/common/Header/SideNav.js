import React from "react";
import { Link } from "react-router-dom";
import logoSide from "webapp/images/logo-white-sidemenu.png";
import Icofont from "react-icofont";

const SideNav = ({ data, side, hideSideMenu }) => (
  <div className={"side default-bg " + (side ? "on" : "")}>
    <Link to="/" className="logo-side">
      <img src={logoSide} alt="side-logo" />
    </Link>
    <Link to="!#" className="close-side" onClick={hideSideMenu}>
      <Icofont icon="close" />
    </Link>
    <div className="widget mt-120">
      <ul className="link">
        {data.map((item) => (
          <li className="link-item" key={item.id}>
            <a className="page-scroll" href={item.path}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <ul className="social-media">
      <li>
        <a href="!#">
          <Icofont icon="facebook" />
          <span style={{ fontSize: 0 }}></span>
        </a>
      </li>
      <li>
        <a href="!#">
          <Icofont icon="twitter" />
          <span style={{ fontSize: 0 }}></span>
        </a>
      </li>
      <li>
        <a href="!#">
          <Icofont icon="behance" />
          <span style={{ fontSize: 0 }}></span>
        </a>
      </li>
      <li>
        <a href="!#">
          <Icofont icon="dribble" />
          <span style={{ fontSize: 0 }}></span>
        </a>
      </li>
      <li>
        <a href="!#">
          <Icofont icon="linkedin" />
          <span style={{ fontSize: 0 }}></span>
        </a>
      </li>
    </ul>
  </div>
);

export default SideNav;
