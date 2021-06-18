import React from "react";
import parse from "html-react-parser";

const WhatWeOfferEight = ({ title, text, image, video, children }) => (
  <section id="feature" className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12 centerize-col">
          <div className="section-title text-center">
            <h1>{title && parse(title)}</h1>
            <p className="mt-50 font-26px line-height-40">
              {text && parse(text)}
            </p>
          </div>
        </div>
      </div>
      <div className="row tabs-style-03 mt-50">
        <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-50 transition-none">
          {children}
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
    </div>
  </section>
);

export default WhatWeOfferEight;
