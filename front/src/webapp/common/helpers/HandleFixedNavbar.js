import { useEffect, useCallback, useState } from "react";

const HandleFixedNavbar = () => {
  const [fixed, setFixed] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return { fixed };
};

export default HandleFixedNavbar;
