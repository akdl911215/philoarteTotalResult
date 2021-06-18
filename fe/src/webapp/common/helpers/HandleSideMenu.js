import { useState } from "react";

const HandleSideMenu = () => {
  const [side, setSide] = useState(false);

  const showSideMenu = (e) => {
    e.preventDefault();
    setSide(true);
  }

  const hideSideMenu = (e) => {
    e.preventDefault();
    setSide(false);
  }

  return { side, showSideMenu, hideSideMenu };
};

export default HandleSideMenu;
