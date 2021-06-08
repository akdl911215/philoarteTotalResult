import React from "react";
import parse from "html-react-parser";

const WhatWeOfferSix = ({
  tagline,
  title,
  backfont,
  text,
  textBtn,
  pathBtn,
  data,
}) => (
  <section id="feature">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-50">
          <div className="section-title text-left">
            <h2
              className="cardo-font default-color"
              data-backfont={backfont || "Services"}
            >
              {tagline}
            </h2>
            <h1>{title && parse(title)}</h1>
            <p className="mt-50 font-26px line-height-40">
              {text && parse(text)}
            </p>
            <p className="mt-30">
              <a href={pathBtn} className="btn btn-lg btn-dark btn-square">
                {textBtn || "Read more"}
              </a>
            </p>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="panel-group accordion-style-01" id="accordion-style">
            {data.map((service, i) => (
              <div key={service.id} className="panel">
                <div className="panel-heading">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion-style"
                    href={"#question" + i}
                    aria-expanded="false"
                    className="collapsed"
                  >
                    <div className="panel-title">
                      {service.title}
                      <span className="pull-right">
                        <i className="ion-android-remove"></i>
                      </span>
                    </div>
                  </a>
                </div>
                <div
                  id={"question" + i}
                  className={"panel-collapse collapse " + (i === 0 ? "in" : "")}
                  aria-expanded="false"
                  role="tablist"
                >
                  <div className="panel-body">{service.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeOfferSix;
