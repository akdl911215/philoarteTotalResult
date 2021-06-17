import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const ClientsCarousel = ({ data, type, classes }) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
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
    <section className={"pt-70 pb-70 " + classes}>
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <div className="row">
          <div className="client-slider slick">
            <Slider {...settings}>
              {data.map((item) => (
                <div className="client-logo" key={item.id}>
                  <img
                    className="img-responsive"
                    src={require("webapp/images/" + item.image)}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
