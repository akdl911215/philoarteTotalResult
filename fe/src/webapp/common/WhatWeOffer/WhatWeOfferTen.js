import React from "react";
import parse from "html-react-parser";

const WhatWeOfferTen = ({ data, tagline, title, backfont }) => (
  <section className="white-bg" id="feature">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 centerize-col">
          <div className="section-title text-center">
            <h2
              className="cardo-font default-color"
              data-backfont={backfont || "Services"}
            >
              {tagline}
            </h2>
            <h1>{title && parse(title)}</h1>
          </div>
        </div>
      </div>

      <div className="row service-box-style-04 mt-50">
        {data.slice(0, 2).map((service) => (
          <div className="col-md-6 col-sm-6 col-xs-12" key={service.id}>
            <div className="white-bg border-radius-5 box-shadow animation-move-top-sm display-block xs-mb-30">
              <div className="all-padding-20 items-center display-flex">
                <div className="icon-img">
                  <img
                    className="img-responsive"
                    src={require("../../assets/images/" + service.icon)}
                    alt=""
                  />
                </div>
                <div className="text-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row service-box-style-04 mt-30 xs-mt-0">
        {data.slice(2, 4).map((service) => (
          <div className="col-md-6 col-sm-6 col-xs-12" key={service.id}>
            <div className="white-bg border-radius-5 box-shadow animation-move-top-sm display-block xs-mb-30">
              <div className="all-padding-20 items-center display-flex">
                <div className="icon-img">
                  <img
                    className="img-responsive"
                    src={require("../../assets/images/" + service.icon)}
                    alt=""
                  />
                </div>
                <div className="text-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferTen;
