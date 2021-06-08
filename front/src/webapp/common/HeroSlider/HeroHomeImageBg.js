import React from "react";
import parse from "html-react-parser";

const HeroHomeImageBg = ({title, image, textBtn, pathBtn}) => (
  <section
    className="parallax-bg fixed-bg view-height-100vh lg-section"
    data-parallax-bg-image={image}
    data-parallax-speed="0.5"
    data-parallax-direction="up"
    id="home"
    style={{
      background: `url(${image}) center center no-repeat`,
      backgroundSize: "cover",
    }}
  >
    <div className="hero-text-wrap xxl-screen transparent-bg">
      <div className="hero-text">
        <div className="container">
          <div className="row">
            <div className="col-md-10 centerize-col">
              <div className="all-padding-50 text-center white-color">
                <h1 className="font-800">{title && parse(title)}</h1>
                <a
                  href={pathBtn}
                  className="btn btn-lg btn-light btn-rounded mt-20"
                >
                  {textBtn || "Read More"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroHomeImageBg;
