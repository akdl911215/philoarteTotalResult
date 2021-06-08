import React from "react";

const PortfolioTwoItem = ({ index, image, title, categories }) => (
  <div
    className={
      (index === 2 || index === 3 ? "col-md-6" : "col-md-3") +
      " cbp-item col-sm-6 " +
        categories.join(',').replace(/\s+/g, "-").replace(/,/g, ' ').toLowerCase().split()
    }
  >
    <div className="portfolio-item">
      <a href="!#">
        <img src={require("webapp/images/portfolio/" + image)} alt="" />
        <div className="portfolio-info dark-bg">
          <div className="centrize">
            <div className="v-center white-color">
              <h3>{title}</h3>
              <p>{categories[0]}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default PortfolioTwoItem;
