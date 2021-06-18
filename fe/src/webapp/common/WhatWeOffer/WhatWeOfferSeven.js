import React from "react";
import parse from "html-react-parser";

const WhatWeOfferSeven = ({ title, text, image }) => (
  <section id="feature">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-50">
          <div className="section-title text-left">
            <h1>{title && parse(title)}</h1>
            <p className="mt-50 font-26px line-height-40">{text && parse(text)}</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <img src={image ? image : null} className="img-responsive" alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeOfferSeven;
