import React from "react";
import Icofont from "react-icofont";

const SearchOverlay = ({ show, onClick }) => (
  <div
    className={
      show === true
        ? "fullscreen-search-overlay fullscreen-search-overlay-show"
        : "fullscreen-search-overlay"
    }
    id="search-overlay"
  >
    <a
      href="!#"
      className="fullscreen-close"
      id="fullscreen-close-button"
      onClick={onClick}
    >
      <Icofont icon="close" />
    </a>
    <div id="fullscreen-search-wrapper">
      <form
        method="get"
        id="fullscreen-searchform"
        style={{ top: window.innerHeight / 2 }}
      >
        <input
          type="text"
          placeholder="Type and hit Enter..."
          id="fullscreen-search-input"
          className="search-bar-top"
        />
        <Icofont icon="search" className="fullscreen-search-icon" />
        <input value="" type="submit" />
      </form>
    </div>
  </div>
);

export default SearchOverlay;
