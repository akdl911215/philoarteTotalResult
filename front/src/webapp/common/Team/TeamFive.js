import React from "react";
import parse from "html-react-parser";
import imgBg from "../../assets/images/background/stars-bg.png";
import Icofont from "react-icofont";

const TeamFive = ({ tagline, title, backfont, data }) => (
  <section
    style={{ background: `url(${imgBg}) center center no-repeat #24182e` }}
    id="team"
  >
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
            <h1 className="white-color">{title && parse(title)}</h1>
          </div>
        </div>
      </div>

      <div className="row mt-50">
        {data.map((member) => (
          <div className="col-md-4 col-sm-4 col-xs-12" key={member.id}>
            <div className="team-member">
              <div className="team-thumb">
                <div className="thumb-overlay"></div>
                <img
                  src={require("../../assets/images/" + member.image)}
                  className="border-radius-10"
                  alt=""
                />
                <div className="member-info text-center white-bg">
                  <h3>{member.title}</h3>
                  <span className="title">{member.role}</span>
                  <div className="social-icons-style-02">
                    <ul className="sm-icon mt-20">
                      {member.social.map((social) => (
                        <li key={social.id}>
                          <a className={social.classNamees} href="#.">
                            <Icofont icon={social.title} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamFive;
