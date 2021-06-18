import React from "react";
import parse from "html-react-parser";
import imgPlanet from "../../assets/images/planet-x-left-2.png";
import imgBg from "../../assets/images/background/stars-bg-2.png";

const TeamFour = ({ tagline, title, children, data }) => (
  <>
    <div className="planet-x-wrap">
      <div className="planet-x-left-2">
        <img src={imgPlanet} className="img-responsive" alt="" />
      </div>
    </div>

    <section
      style={{ background: `url(${imgBg}) center center no-repeat #24182e` }}
      id="team"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12 xs-mb-50">
            <div className="section-title text-left">
              <h2 className="cardo-font default-color" data-backfont="Team">
                {tagline}
              </h2>
              <h1 className="white-color">{title && parse(title)}</h1>
              <p className="mt-50 font-26px line-height-40 white-color">
                {children && parse(children)}
              </p>
            </div>
          </div>

          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="row">
              {data.map((member) => (
                <div key={member.id} className={"col-md-6 col-sm-6 col-xs-12 " + member.classes}>
                  <div className="team-member">
                    <div className="team-thumb">
                      <div className="thumb-overlay"></div>
                      <img
                        src={require("../../assets/images/" + member.image)}
                        alt={member.title}
                      />
                      <div className={"member-info text-center white-color " + member.color}>
                        <h3 className="mt-0">{member.title}</h3>
                        <span className="title">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TeamFour;
