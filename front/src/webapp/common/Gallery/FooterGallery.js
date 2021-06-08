import React from "react";
import FooterGalleryBox from "./FooterGalleryBox";

const FooterGallery = ({ data }) => (
  <ul className="footer-gallery" id="footer-gallery">
    {data.map((item, i) => (
      <FooterGalleryBox key={i} thumb={item.thumb} large={item.large} />
    ))}
  </ul>
);

export default FooterGallery;
