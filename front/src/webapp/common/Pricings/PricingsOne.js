import React from "react";
import parse from "html-react-parser";

const PricingsOne = ({ title, tagline, backfont, titleAlign, data, classes, dashColor }) => (
  <section id="pricing" className={classes ? classes : ""}>
    <div className="container">
      <div className="row">
        {titleAlign === "left" ? (
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="section-title text-left text-sm-center text-xs-center">
              <h1 data-backfont-sm={backfont || "Pricing"}>{title && parse(title)}</h1>
            </div>
          </div>
        ) : (
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2 className="cardo-font default-color" data-backfont={backfont || "Plans"}>
                {tagline}
              </h2>
              <h1>{title && parse(title)}</h1>
              <hr className={"center_line " + (dashColor === "dark" ? "dark-bg" : "default-bg")} />
            </div>
          </div>
        )}
      </div>
      <div className="row mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className={
              "col-md-4 pricing-table col-sm-4 " +
              (item.featured === "true" ? "featured" : "")
            }
          >
            <div
              className={
                "pricing-box " + (item.featured === "true" ? "featured" : "")
              }
            >
              {item.featured === "true" ? (
                <div className="featured-mark">Featured</div>
              ) : null}
              <h3
                className={
                  (item.featured === "true" ? "default-color" : "dark-color") +
                  " mb-0"
                }
              >
                {item.title}
              </h3>
              <h4 className="dark-color">{item.tagline}</h4>
              <h2
                className={
                  "font-60px sm-font-30px " +
                  (item.featured === "true" ? "default-color" : "dark-color")
                }
              >
                <sup
                  className={
                    item.featured === "true" ? "default-color" : "dark-color"
                  }
                >
                  {item.currency}
                </sup>
                <span>{item.price}</span>
              </h2>
              <div className="pricicng-feature">
                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="pricing-box-bottom">
                <a
                  href="!#"
                  className={
                    "btn btn-lg btn-square full-width " +
                    (item.featured === "true" ? "btn-color" : "btn-dark")
                  }
                >
                  {item.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingsOne;
