import React from "react";
import Slider from "react-slick";
import parse from "html-react-parser";

const BlogCarousel = ({ tagline, title, backfont, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    className: "blog-carousel",
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
    <section id="blog" className="dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2 className="cardo-font default-color" data-backfont={backfont || "Blogs"}>
                {tagline}
              </h2>
              <h1 className="white-color">{title && parse(title)}</h1>
            </div>
          </div>
        </div>
        <div className="row mt-80 blog-style-01">
          <Slider {...settings}>
            {data.map((post) => (
              <div key={post.id} className="col-md-4 col-sm-4 col-xs-12">
                <div className="post">
                  <div className="post-img border-radius-5">
                    <img
                      className="img-responsive"
                      src={require("" + post.image)}
                      alt=""
                    />
                    <div className="post-metas">
                      <div className="post-metas-center">
                        <p className="post-date">{post.published}</p>
                      </div>
                    </div>
                  </div>
                  <div className="post-info all-padding-20 white-color">
                    <h3>
                      <a href="blog-details">{post.title}</a>
                    </h3>
                    <p>{post.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
