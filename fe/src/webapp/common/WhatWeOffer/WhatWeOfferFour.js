import React from "react";
import parse from "html-react-parser";

const WhatWeOfferFour = ({ tagline, title, backfont, image, data }) => (
  <section className="white-bg" id="service">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 centerize-col">
          <div className="section-title text-center">
            <h2 className="cardo-font default-color" data-backfont={backfont || "Services"}>
              {tagline}
            </h2>
            <h1>{title && parse(title)}</h1>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-5 col-sm-5 col-xs-12">
          <div className="img-box">
            <img src={image} className="img-responsive" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-1 mt-50">
          <h2 className="cardo-font mt-0">
            We are offer fully digital services
          </h2>
          <p className="mt-30 font-16px">
            Wisi minimum vituperatoribus his in. Tation iriure impetus vim ut.
            An cum dicat minim accusata, sea enim labore mnesarchum et, ex justo
            libris feugiat eam sea id iisque sapientem assum nonumes et ius,
            error soleat cu ius dicant nusquam ad, et ius iriure molestiae qui
            ex, et dignissim
          </p>
          <ul className="remove-padding list-style-02 mt-50 font-16px">
            <li>Unlimited Icons</li>
            <li>Multi-Purpose</li>
            <li>Revolution Slider</li>
            <li>Responsive Layout</li>
            <li>Easy Customization</li>
            <li>SEO-Friendly</li>
          </ul>
          <p className="mt-30">
            <a href="!#" className="btn btn-lg btn-color btn-rounded" tabIndex="0">
              Start a project
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-80">
        {data.map((service, i) => (
          <div key={service.id} className="col-md-4 col-sm-4 col-xs-12">
            <h3
              data-backfont={"0"+(i + 1)}
              className="cardo-font default-color font-italic"
            >
              {service.tagline}
            </h3>
            <h2 className="mt-0 font-800">{service.title}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferFour;
