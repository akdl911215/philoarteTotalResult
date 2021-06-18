import React from "react";
import parse from "html-react-parser";
import teamBg from "../../assets/images/background/stars-bg.png";
import TeamTwoMember from "./TeamTwoMember";

const TeamTwo = ({ title, backfont, data }) => (
  <section
    style={{ background: `url(${teamBg}) center center no-repeat #24182e` }}
    id="team"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="section-title text-left text-sm-center text-xs-center">
            <h1 data-backfont-sm={backfont || "Crew"} className="white-color">
              {title && parse(title)}
            </h1>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        {data.map((member) => (
          <TeamTwoMember
            key={member.id}
            title={member.title}
            role={member.role}
            image={member.image}
            social={member.social}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TeamTwo;
