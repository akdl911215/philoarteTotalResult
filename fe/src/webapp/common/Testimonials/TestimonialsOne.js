import React from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import Icofont from "react-icofont";

const TestimonialsOne = ({ tagline, title, backfont, data, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container">
        {title || tagline ? (
          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12 centerize-col">
              <div className="section-title text-center">
                <h2
                  className="cardo-font default-color"
                  data-backfont={backfont || "Client"}
                >
                  {tagline}
                </h2>
                <h1>{title && parse(title)}</h1>
              </div>
            </div>
          </div>
        ) : null}
        <div className={"row " + (title || tagline ? "mt-30" : "")}>
          <div className="testimonial-style-2">
            <Slider {...settings}>
              {items
                ? data
                    .filter((v, i) => i < items)
                    .map((item, i) => (
                      <div className="col-xs-12" key={item.id}>
                        <div className="testimonial-item">
                          <div className="testimonial-content">
                            <p className="line-height-26 font-20px">
                              <Icofont
                                icon="quote-left"
                                className="font-50px default-color mt-20"
                              />
                              <span>{data[i].text}</span>
                            </p>
                            <img
                              className="img-responsive"
                              src={require("webapp/images/" +
                                data[i].image)}
                              alt=""
                            />
                            <h5 className="font-700 mb-0">{data[i].title}</h5>
                          </div>
                        </div>
                      </div>
                    ))
                : data.map((item, i) => (
                    <div className="col-xs-12" key={item.id}>
                      <div className="testimonial-item">
                        <div className="testimonial-content">
                          <p className="line-height-26 font-20px">
                            <Icofont
                              icon="quote-left"
                              className="font-50px default-color mt-20"
                            />
                            <span>{data[i].text}</span>
                          </p>
                          <img
                            className="img-responsive"
                            src={require("webapp/images/" +
                              data[i].image)}
                            alt=""
                          />
                          <h5 className="font-700 mb-0">{data[i].title}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOne;
