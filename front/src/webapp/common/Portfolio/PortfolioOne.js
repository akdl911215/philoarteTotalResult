import React from "react";
import parse from "html-react-parser";

import PortfolioFilter from "./PortfolioFilter";
import LoadScript from "../helpers/LoadScript";
import PortfolioItem from "./PortfolioItem";

const PortfolioOne = ({ title, tagline, backfont, data, filter, categories, classes, dash, dashColor }) => {
  LoadScript("js/portfolio/portfolio-grid.js");

  return (
    <section id="portfolio" className={"pb-0 " + classes}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2 className="cardo-font default-color" data-backfont={backfont}>
                {tagline}
              </h2>
              <h1>{title && parse(title)}</h1>
              {dash === "show" ? <hr className={"center_line " + (dashColor === "dark" ? "dark-bg" : "default-bg")} /> : null}
            </div>
          </div>
        </div>
        {filter === true && Array.isArray(categories) ? (
          <PortfolioFilter categories={categories} classes="mb-80" />
        ) : null}
      </div>
      <div className="container-fluid remove-padding">
        <div className={"row " + (!filter ? "mt-80" : "")}>
          <div className="col-md-12">
            <div id="portfolio-gallery" className="cbp">
              {data
                .filter((v, i) => i < 8)
                .map((item, i) => (
                  <PortfolioItem
                    key={item.id}
                    title={item.title}
                    categories={item.categories}
                    image={item.image}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOne;
