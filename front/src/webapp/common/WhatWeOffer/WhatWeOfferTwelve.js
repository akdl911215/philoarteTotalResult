import React from "react";

const WhatWeOfferTwelve = ({ data }) => (
  <section id="feature">
    <div className="container">
      <div className="row service-box-style-05">
        {data.map((service) => (
          <div
            className="col-md-3 col-sm-6 col-xs-12 text-center"
            key={service.id}
          >
            <div className="icon-img">
              <img
                className="img-responsive"
                src={require("../../assets/images/" + service.image)}
                alt=""
              />
            </div>
            <h3 className="font-800" data-backfont="01">
              {service.title}
            </h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferTwelve;
