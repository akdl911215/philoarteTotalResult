import React from "react";
import parse from "html-react-parser";
import imgPlanetLeft from "webapp/images/planet-x-left.png";
import imgPlanetRight from "webapp/images/planet-x-right.png";

const ProcessFour = ({ tagline, title, backfont, bg, data }) => (
  <>
    <div className="planet-x-wrap">
      <div className="planet-x-left">
        <img src={imgPlanetLeft} className="img-responsive" alt="planet-left" />
      </div>
      <div className="planet-x-right">
        <img
          src={imgPlanetRight}
          className="img-responsive"
          alt="planet-right"
        />
      </div>
    </div>
    <section
      style={{ background: `url(${bg}) center center no-repeat #24182e` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-50">
            <div className="section-title text-left white-color">
              <h2
                className="cardo-font white-color"
                data-backfont={backfont || "Steps"}
              >
                {tagline}
              </h2>
              <h1>{title && parse(title)}</h1>
            </div>
          </div>
        </div>
        <div className="row our-process-style-02 mt-50">
          {data.map((service, i) => (
            <div
              key={service.id}
              className="col-md-3 col-sm-6 col-xs-12 line xs-mb-30 sm-mb-30"
            >
              <div className={"icon-wrap color-" + (i + 1)}>
                <div className="icon">
                  <i className={service.icon + " white-color font-30px"}></i>
                </div>
              </div>
              <div className="text-center white-color">
                <h3 className="mt-10 white-color font-600">{service.title}</h3>
                <p className="mb-0">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ProcessFour;
