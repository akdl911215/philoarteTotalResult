import React from "react";
import parse from "html-react-parser";

const WhatWeOfferEleven = ({
  data,
  tagline,
  title,
  text,
  backfont,
  textImg,
  image,
  imageAlt,
}) => (
  <section id="feature">
    <div className="container">
      <div className="row">
        {data.map((service, i) => (
          <div key={service.id} className="col-md-4 col-sm-4 col-xs-12">
            <h3
              data-backfont={"0" + (i + 1)}
              className="cardo-font default-color font-italic"
            >
              {service.tagline}
            </h3>
            <h2 className="mt-0 font-800">{service.title}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
      <div className="row mt-100 xs-mt-50">
        <div className="col-md-6 col-sm-6">
          <div className="section-title pt-100 xs-pt-50">
            <h2
              className="cardo-font default-color"
              data-backfont={backfont || "Skills"}
            >
              {tagline}
            </h2>
            <hr className="left-line dark-bg" />
            <h1>{title && parse(title)}</h1>
            <p className="mt-20">{text && parse(text)}</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="relative">
            <img src={image} alt={imageAlt || textImg} />
            {textImg.length ? (
              <div className="img-text-box">
                <div className="img-text-box-inner">
                  <h2 className="font-800">{textImg}</h2>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeOfferEleven;
