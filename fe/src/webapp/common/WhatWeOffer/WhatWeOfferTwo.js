import React from "react";
import parse from "html-react-parser";

const WhatWeOfferTwo = ({ title, text, backfont, image, video, children }) => (
  <section id="feature" className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-50">
          <div className="section-title text-left">
            <h1 data-backfont-sm={backfont || "Design"}>{title && parse(title)}</h1>
            <p className="mt-50 font-26px line-height-40">{text}</p>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
          <img src={image} className="img-responsive" alt="" />
          <div className="video-box_overlay">
            <div className="center-layout">
              <div className="v-align-middle">
                <a className="popup-youtube" href={video}>
                  <div className="play-button">
                    <i className="tr-icon ion-android-arrow-dropright"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  </section>
);

export default WhatWeOfferTwo;
