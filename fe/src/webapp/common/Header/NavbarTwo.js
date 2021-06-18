import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../helpers/UseWindowSize";

const NavbarTwo = ({ data }) => {
  const width = useWindowSize().width;
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    if (width < 993) {
      setOpen(!open);
    }
  };
  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <div className="col-half left">
        <ul className="nav navbar-nav navbar-center navbar-left">
          {data
            .filter((v, i) => i < data.length / 2)
            .map((item) =>
              item.subMenu ? (
                <li
                  key={item.id}
                  className={"dropdown " + (open ? "on" : "")}
                  onClick={handleMenu}
                >
                  <a href={item.path} className="dropdown-toggle">
                    {item.title}
                  </a>
                  <ul
                    className={
                      "dropdown-menu " + (open ? "animated fadeIn" : "animated")
                    }
                    style={{ display: open && "block" }}
                  >
                    {item.subMenu.map((item) => (
                      <li key={item.id}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.path} className="page-scroll">
                    {item.title}
                  </a>
                </li>
              )
            )}
        </ul>
      </div>
      <div className="col-half right">
        <ul className="nav navbar-nav navbar-center navbar-right">
          {data
            .filter((v, i) => i >= data.length / 2)
            .map((item) =>
              item.subMenu ? (
                <li
                  key={item.id}
                  className={"dropdown " + (open ? "on" : "")}
                  onClick={handleMenu}
                >
                  <a href={item.path} className="dropdown-toggle">
                    {item.title}
                  </a>
                  <ul
                    className={
                      "dropdown-menu " + (open ? "animated fadeIn" : "animated")
                    }
                    style={{ display: open && "block" }}
                  >
                    {item.subMenu.map((item) => (
                      <li key={item.id}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.path} className="page-scroll">
                    {item.title}
                  </a>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default NavbarTwo;
