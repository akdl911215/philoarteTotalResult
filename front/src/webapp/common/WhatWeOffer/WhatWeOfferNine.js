import React from "react";
import imgBg from "../../assets/images/background/stars-bg-4.png";

const WhatWeOfferNine = ({ children }) => (
  <section
    id="feature"
    style={{ background: `url(${imgBg}) center center no-repeat #fff` }}
  >
    <div className="container">{children}</div>
  </section>
);

export default WhatWeOfferNine;
