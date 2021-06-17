import React from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import Icofont from "react-icofont";

const TestimonialsTwo = ({ data, title, backfont, type }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={type === "dark" ? "dark-bg" : ""}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div
              className={
                "section-title text-left text-sm-center text-xs-center " +
                (type === "dark" ? "white-color" : "")
              }
            >
              <h1 data-backfont-sm={backfont || "Do Fund"}>
                {title && parse(title)}
              </h1>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="testimonial">
            <Slider {...settings}>
              {data.map((item, i) => (
                <div className="col-md-4 col-sm-6 col-xs-12" key={item.id}>
                  <div className="testimonial-item">
                    <div className="testimonial-content border-radius-5 box-shadow">
                      <p className="line-height-26 font-14px">
                        <Icofont
                          icon="quote-left"
                          className="font-50px default-color mt-20"
                        />
                        <span>{data[i].text}</span>
                      </p>
                      <img
                        className="img-responsive"
                        src={require("webapp/images/" + data[i].image)}
                        alt=""
                      />
                      <h5 className="font-700 mb-0">{data[i].title}</h5>
                      <h5 className="font-500 default-color mt-10">
                        {data[i].role}
                      </h5>
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

export default TestimonialsTwo;
