import React from "react";

const WhatWeOfferThree = ({ data }) => (
  <section id="service" className="pt-80 pb-80 white-bg">
    <div className="container">
      <div className="row">
        {data.map((service) => (
          <div
            className="col-md-4 feature-box text-left xs-mb-50 col-sm-6"
            key={service.id}
          >
            <div className="pull-left">
              <i className={service.icon + " font-40px default-color"}></i>
            </div>
            <div className="pull-right">
              <h4 className="mt-0 font-700 mb-20">{service.title}</h4>
              <p className="font-400 mb-0">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferThree;
