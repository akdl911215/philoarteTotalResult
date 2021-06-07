import React from "react";
import parse from "html-react-parser";
import img from "webapp/images/background/parallax_bg.png";

const PresentationOne = ({ title, text, textBtn, pathBtn }) => (
  <section
    style={{ background: `url(${img}) center center no-repeat #e6f8f9` }}
    className="height-600px"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-left">
          <h1 className="font-700 xs-font-40px font-40px">
            {title && parse(title)}
          </h1>
          <p className="mt-30">{text && parse(text)}</p>
          <p className="mt-30">
            <a href={pathBtn} className="btn btn-lg btn-color btn-circle">
              {textBtn || "Read More"}
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PresentationOne;
