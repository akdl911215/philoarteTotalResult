import React from "react";
import Icofont from "react-icofont";

const FooterGalleryBox = ({ thumb, large }) => (
  <li>
    <div className="footer-gallery-box">
      <div className="skin-overlay"></div>
      <img src={require("webapp/images/" + thumb)} alt="" />
      <div className="zoom-wrap text-center">
        <ul className="footer-gallery-zoom">
          <li>
            <a
              className="magnific-lightbox"
              href={require(`webapp/images/${large}`)}
            >
              <Icofont icon="search" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
);

export default FooterGalleryBox;
