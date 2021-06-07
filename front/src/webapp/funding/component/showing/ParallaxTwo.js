import React from "react";
import parse from "html-react-parser";

const ParallaxTwo = ({ title, tagline, textBtn, pathBtn, typeBtn, image }) => (
  <section
    className="parallax-bg fixed-bg xs-pt-40 xs-pb-40"
    data-parallax-bg-image={image}
    data-parallax-speed="0.5"
    data-parallax-direction="up"
  >
    <div className="overlay-bg"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center parallax-content height-400px centerize-col">
          <div className="center-layout">
            <div className="v-align-middle">
              <h1 className="font-800 white-color xs-font-40px">
                {title && parse(title)}
              </h1>
              <h3 className="white-color">{tagline && parse(tagline)}</h3>
              <p className="mt-30">
                <a href={pathBtn} className={"btn " + (typeBtn ? typeBtn : "btn-lg btn-dark btn-square")}>
                  {textBtn}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ParallaxTwo;
