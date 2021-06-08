import { useEffect } from "react";

const LoadScript = (url) => {
  useEffect(() => {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default LoadScript;
