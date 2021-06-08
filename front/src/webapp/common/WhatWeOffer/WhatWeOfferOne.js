import React from "react";
import parse from "html-react-parser";

const WhatWeOfferOne = ({ tagline, title, image, children }) => (
  <section className="white-bg" id="feature">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <img src={image} alt="" />
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="section-title xs-mt-100">
            <h2 className="cardo-font default-color" data-backfont="Skills">
              {tagline}
            </h2>
            <hr className="left-line default-bg" />
            <h1>{title && parse(title)}</h1>
            <p className="mt-20">{children && parse(children)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeOfferOne;
