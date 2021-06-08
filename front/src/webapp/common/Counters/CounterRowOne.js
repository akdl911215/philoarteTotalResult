import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterRowOne = ({ data, type, classes }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <div className={"row " + classes}>
      {data ? (
        data.map((item) => (
          <div
            className="col-md-3 col-sm-6 xs-mb-40 sm-mb-20 xs-ml-40"
            key={item.id}
          >
            <div className="counter-type-2 relative">
              <i className={`${item.icon} default-color font-60px`}></i>
              <h3
                className={
                  "display-block mt-0 mb-0 " +
                  (type === "dark" ? "white-color" : "")
                }
              >
                <span className="counter font-600">
                  <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                    <CountUp
                      delay={0.02}
                      duration={4}
                      end={viewed ? item.value : 0}
                    />
                  </VisibilitySensor>
                </span>
              </h3>
              <h5
                className={
                  "mt-0 font-600 " + (type === "dark" ? "white-color" : "")
                }
              >
                {item.title}
              </h5>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center pt-50 pb-50">
          <h1 className="font-800 default-color">Something is missing</h1>
          <p className="mt-30 red-color text-decoration-underline">
            <b>CounterRowOne </b>component require a [data] parameter and needs
            to be an array of objects
          </p>
        </div>
      )}
    </div>
  );
};

export default CounterRowOne;
