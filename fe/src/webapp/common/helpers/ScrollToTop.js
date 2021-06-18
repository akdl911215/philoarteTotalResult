import React, { useState, useEffect } from "react";
import Icofont from "react-icofont";

const ScrollToTop = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a
        href="!#"
        id="return-to-top"
        className={scrolled ? "show" : ""}
        title="Back to top"
        onClick={backToTop}
      >
        <Icofont icon="arrow-up" />
      </a>
      {children}
    </>
  );
};

export default ScrollToTop;
