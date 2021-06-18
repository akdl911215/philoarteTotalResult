import React from "react";
import parse from "html-react-parser";

const TeamThree = ({ tagline, title, backfont, data }) => (
  <section className="white-bg" id="team">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h2
              className="cardo-font default-color"
              data-backfont={backfont || "Team"}
            >
              {tagline}
            </h2>
            <h1>{title && parse(title)}</h1>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        {data.map((member) => (
          <div key={member.id} className="col-md-3 col-sm-3 col-xs-12">
            <div className="team-member">
              <div className="team-thumb">
                <div className="thumb-overlay"></div>
                <img
                  src={require("../../assets/images/" + member.image)}
                  alt=""
                  className="border-radius-5"
                />
                <div className="member-info text-center white-bg border-radius-5">
                  <h3 className="mt-0">{member.title}</h3>
                  <span className="title">{member.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamThree;
