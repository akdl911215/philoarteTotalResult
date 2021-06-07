import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const Skillbar = ({ title, percentage }) => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <div className="skillbar" data-percent={percentage}>
        <span className="skillbar-title">{title}</span>
        <p
          className="skillbar-bar"
          style={{ width: isVisible ? `${percentage}%` : "0" }}
        ></p>
        <span className="skill-bar-percent">
          {isVisible ? (
            <CountUp start={0} suffix="%" end={parseInt(percentage)} duration={4} />
          ) : (
            ""
          )}
        </span>
      </div>
    )}
  </VisibilitySensor>
);

export default Skillbar;
