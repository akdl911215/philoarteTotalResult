import React from "react";
import parse from "html-react-parser";

const ParallaxOne = ({ backfont, image, children }) =>(
  <section
    className="parallax-bg fixed-bg xs-pt-40 xs-pb-40"
    data-parallax-bg-image={image}
    data-parallax-speed="0.5"
    data-parallax-direction="up"
  >
    <div className="overlay-bg"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-10 text-center parallax-content height-400px centerize-col">
          <div className="center-layout">
            <div className="v-align-middle">
              <h1
                className="font-700 white-color cardo-font xs-font-40px font-70px"
                data-backfont={backfont || "Anno"}
              >
                {children && parse(children)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ParallaxOne;
