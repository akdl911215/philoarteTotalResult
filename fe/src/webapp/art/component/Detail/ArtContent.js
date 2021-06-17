import React from "react";
import Slider from "react-slick";

import { ArtSidebar, RecentPosts } from "webapp/art"

const ArtContent = ({ post }) => {

  console.log("Art Contents", post)
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "blog-grid-slider slick",
  };

  return (
    <>
      {
      post ?
        <section className="white-bg">
          <div className="container" >
            <div className="row">
              <div className="col-md-9 col-sm-9 col-xs-12 xs-mb-50">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12 mb-20 xs-mb-50">
                    <div className="post">
                      <Slider {...settings}>
                        {post.files.map((image, i) => (
                          <div className="item" key={i}>
                            <img
                              className="img-responsive"
                              src={`http://localhost:8080/art_files/display?fileName=${image.savedFileName}`}
                              alt=""
                            />
                          </div>
                        ))}
                      </Slider>
                      <div className="post-metas">
                        <div className="post-metas-center">
                          <p className="post-date">{post.regDate}</p>
                        </div>
                      </div>
                      <div className="post-info all-padding-20">
                        <h3>{post.title}</h3>
                      </div>
                      <div className="blog-standard mb-50">
                        <blockquote>
                          <p>
                            {post.description}
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-12 mb-20">

                    <h2 className="recent-post-title">Recent Posts</h2>
                    <RecentPosts artistId={post.artist.artistId} />
                  </div>
                </div>
              </div>
                <ArtSidebar post={post} />
            </div>
          </div>
        </section >
        :
        <></>
      }
    </>
  )
};

export default ArtContent;
