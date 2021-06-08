import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../helpers/UseWindowSize";

const Navbar = ({ data }) => {
  const width = useWindowSize().width;
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    if (width < 993) {
      setOpen(!open);
    }
  };

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav navbar-center">
        {data ? (
          data.map((item) =>
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
                  className={"dropdown-menu " + (open ? "animated fadeIn" : "animated")}
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
          )
        ) : (
          <div className="text-center pt-50 pb-50">
            <h1 className="font-800 default-color">Something is missing</h1>
            <p className="mt-30 red-color text-decoration-underline">
              <b>Navbar </b>component require a [data] parameter and needs to be
              an array of objects
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
