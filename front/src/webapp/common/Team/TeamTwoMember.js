import React from "react";
import Icofont from "react-icofont";

const TeamTwoMember = ({ title, role, image, social }) => (
  <div className="col-md-4 col-sm-4 col-xs-12">
    <div className="team-member">
      <div className="team-thumb">
        <div className="thumb-overlay"></div>
        <img src={require("../../assets/images/" + image)} className="border-radius-10" alt="" />
        <div className="member-info text-center white-bg">
          <h3>{title}</h3>
          <span className="title">{role}</span>
          <div className="social-icons-style-09">
            <ul className="sm-icon mt-20">
              {social.map((item) => (
                <li key={item.id}>
                  <a className={item.classes} href="#.">
                    <Icofont icon={item.title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamTwoMember;
