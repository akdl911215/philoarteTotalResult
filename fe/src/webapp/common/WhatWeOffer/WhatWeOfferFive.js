import React from "react";
import parse from "html-react-parser";
import Icofont from "react-icofont";

const WhatWeOfferFive = ({ tagline, title, backfont,  data }) => (
  <section className="white-bg" id="service">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 centerize-col">
          <div className="section-title text-center">
            <h2 className="cardo-font default-color" data-backfont={backfont || "Anno"}>
              {tagline}
            </h2>
            <h1>{title && parse(title)}</h1>
          </div>
        </div>
      </div>
      <div className="row service-box-style-03 mt-100">
        {data.map((item) => (
          <div key={item.id} className="col-md-4 col-sm-4 col-xs-12">
            <div className="flipper">
              <div className="text-center mb-50 main-box">
                <div className="box-front height-300px default-bg border-radius-5">
                  <div className="content-wrap white-color">
                    <Icofont icon={item.icon} className="font-40px" />
                    <h4 className="font-600">{item.title}</h4>
                    <p className="font-400 mt-20">{item.textFront}</p>
                  </div>
                </div>
                <div className="box-back height-300px dark-bg border-radius-5">
                  <div className="content-wrap">
                    <Icofont
                      icon={item.icon}
                      className="font-40px default-color"
                    />
                    <h4 className="font-600 white-color">{item.title}</h4>
                    <p className="font-400 mt-20 white-color">
                      {item.textBack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferFive;
