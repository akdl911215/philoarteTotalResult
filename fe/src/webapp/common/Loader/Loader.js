import React, { useState, useEffect } from "react";
import imgLoader from "webapp/images/loader.svg";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const el = document.querySelector(".loader-overlay");
      if (el) {
        setLoading(false);
        el.remove();
      }
  }, [loading]);

  return (
    <>
      <div id="loader-overlay">
        <div className="loader">
          <img src={imgLoader} width="80" alt="" />
        </div>
      </div>
      {children}
    </>
  );
};

export default Loader;
