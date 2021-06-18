import React from "react";
import Slider from "react-slick";

const HeroBusinessSlider = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    arrows: true,
    className: "default-slider slick",
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
    <section className="home-slider" id="home">
      <Slider {...settings}>
        {data.map((slide) => (
          <div className="slide" key={slide.id}>
            <div
              className="slide-img parallax-effect"
              style={
                slide.image
                  ? {
                      background: `url(
                      ${require("../../assets/images/" + slide.image)}
                      ) center center / cover scroll no-repeat`,
                    }
                  : null
              }
            ></div>
            <div
              className={
                "hero-text-wrap " +
                (slide.overlay ? "gradient-overlay-transparent" : "")
              }
            >
              <div className="hero-text white-color">
                <div className="container">
                  <div className="white-color text-center">
                    <h1
                      className="white-color font-800 font-100px line-height-90 cardo-font xs-font-70px"
                      data-backfont={slide.backfont}
                    >
                      {slide.title}
                    </h1>
                    <h4 className="white-color font-600 mt">{slide.text}</h4>
                    <p className="text-center mt-30">
                      {slide.buttons.map((button) => (
                        <a
                          key={button.id}
                          href={button.path}
                          className={"btn " + button.type}
                        >
                          {button.title}
                        </a>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBusinessSlider;
