import React from "react";
import parse from "html-react-parser";

const WhatWeDoOne = ({ tagline, title, backfont, image, textBtn, children, classes }) => (
  <section className={"dark-bg lg-section " + classes} id="about">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
    <div className="container-fluid">
      <div className="col-md-5 col-sm-7 pl-70 pr-70">
        <div className="section-title">
          <h2 className="cardo-font default-color" data-backfont={backfont || "Digital"}>
            {tagline}
          </h2>
          <h1 className="white-color">{title && parse(title)}</h1>
          <hr className="left-line white-bg" />
        </div>
        <p className="white-color">{children && parse(children)}</p>
        <p className="mt-30">
          <a href="!#" className="btn btn-lg btn-light-outline btn-square">{textBtn || "Read More"}</a>
        </p>
      </div>
    </div>
  </section>
);

export default WhatWeDoOne;
