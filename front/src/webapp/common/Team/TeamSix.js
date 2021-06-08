import React from "react";
import parse from "html-react-parser";
import Icofont from "react-icofont";

const TeamSix = ({ title, data }) => (
  <section className="dark-bg" id="team">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
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
                  alt=""
                />
                <div className="member-info text-center white-bg">
                  <h3>{member.title}</h3>
                  <span className="title">{member.role}</span>
                  <div className="social-icons-style-02">
                    <ul className="sm-icon mt-20">
                      {member.social.map((social) => (
                        <li key={social.id}>
                          <a
                            className={social.classNamees}
                            href={process.env.PUBLIC_URL}
                          >
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

export default TeamSix;
