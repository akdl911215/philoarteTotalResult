import React from "react";
import parse from "html-react-parser";
// import SkillbarSection from "../Skillbar/SkillbarSection";
import SkillbarSection from "webapp/funding/component/showing/SkillbarSection";

const AboutTwo = ({ title, text, children, data }) => (
  <section className="white-bg" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-50">
          <h2 className="mt-0 font-700">{title && parse(title)}</h2>
          {text&&parse(text)}
        </div>
        <SkillbarSection data={data} />
      </div>
      {children}
    </div>
  </section>
);

export default AboutTwo;
