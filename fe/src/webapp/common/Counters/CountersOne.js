import React from "react";
import CounterRowOne from "./CounterRowOne";

const CountersOne = ({ data, type, classes }) => (
  <section className={(type === "dark" ? "dark-bg" : "") + " xs-pt-80 xs-pb-80 " + classes}>
    <div className="container">
      <CounterRowOne data={data} type={type} />
    </div>
  </section>
);

export default CountersOne;
