import React from "react";

const PortfolioItem = ({ image, title, categories }) => (
  <div
    className={
      "cbp-item col-md-3 col-sm-6 " +
      categories.join(',').replace(/\s+/g, "-").replace(/,/g, ' ').toLowerCase().split()
    }
  >
    <div className="portfolio-item">
      <a href="!#">
        <img src={require("webapp/images/portfolio/" + image)} alt="" />
        <div className="portfolio-info white-bg">
          <div className="centrize">
            <div className="v-center dark-color">
              <h3>{title}</h3>
              <p>{categories[0]}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default PortfolioItem;
