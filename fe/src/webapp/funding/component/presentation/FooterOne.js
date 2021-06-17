import React from "react";
import { Link } from "react-router-dom";
import LoadScript from "webapp/art/component/Presentation/LoadScript";
import dataGallery from "webapp/art/component/Presentation/footer-gallery.json";
import logo from "webapp/art/component/Presentation/logo-footer.png";
import FooterGallery from "./FooterGallery";
import Icofont from "react-icofont";

const Footer = ({ bg }) => {
  LoadScript("./js/master.js");
  return (
    <>
      <footer className="footer">
        <div
          className="footer-main"
          style={{
            background: bg
              ? `url(${bg}) center center no-repeat #24182e`
              : null,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="widget widget-text">
                  <div className="logo-footer">
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      <img className="img-responsive" src={logo} alt="" />
                    </Link>
                  </div>
                  <p>
                    Anno template provides fully flexible templates, allowing to
                    customize every page.
                  </p>
                  <p className="mt-20 mb-0">
                    <a href="tel:+44 1234-567-8">+44 1234-567-8</a>
                  </p>
                  <p className="mt-0">
                    <a
                      href="https://www.google.com/maps/search/Potsdamer+Platz+9797/@52.5096488,13.3737554,17z/data=!3m1!4b1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Potsdamer Platz 9797
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="widget widget-text widget-links">
                  <h5 className="widget-title">Join The Newsletter</h5>
                  <p>
                    Lorem ipsum dolor sit amet, ut ius audiam denique tractatos.
                  </p>
                  <form
                    name="subscribe"
                    id="subscribe"
                    method="POST"
                    className="contact-form-style-02"
                  >
                    <div className="form-group mt-20 mb-0">
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="md-input style-02"
                        id="email"
                        placeholder="email"
                        required
                        data-error="Your Name is Required"
                      />
                    </div>
                    <div className="text-left mt-10">
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-lg btn-color btn-square remove-margin"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="widget widget-links">
                  <h5 className="widget-title">Quick Links</h5>
                  <ul>
                    <li>
                      <a href="!#">Engaging, purposeful, and creative.</a>
                    </li>
                    <li>
                      <a href="!#">Extroadinary life events.</a>
                    </li>
                    <li>
                      <a href="!#">Design your perfect event.</a>
                    </li>
                    <li>
                      <a href="!#">Connect your worlds.</a>
                    </li>
                    <li>
                      <a href="!#">Improving workplace productivity.</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="widget widget-links">
                  <h5 className="widget-title">Media Gallery</h5>
                  <FooterGallery data={dataGallery} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-copyright"
          style={{
            background: bg
              ? `url(${bg}) center center no-repeat #24182e`
              : null,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copy-right text-center">
                  © 2019 Anno Agency. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="!#" id="return-to-top">
        <Icofont icon="arrow-up" />
      </a>
    </>
  );
};

export default Footer;
