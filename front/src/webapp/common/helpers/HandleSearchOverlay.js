import { useState, useCallback, useEffect } from "react";

const HandleSearchOverlay = () => {
  const [show, setShow] = useState(false);

  const showSearchForm = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeForm);

    return () => {
      window.removeEventListener("resize", resizeForm);
    };
  }, [resizeForm]);

  return {show, showSearchForm, hideSearchForm};
};

export default HandleSearchOverlay;
