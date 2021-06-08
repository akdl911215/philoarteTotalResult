import React from "react";
import parse from "html-react-parser";
import dataStyle from "../data/Maps/style-3-map.json";
import Map from "../Map/Map";

const ContactOne = ({ tagline, title, backfont, dash, textBtn, classes }) => (
  <section
    className={"dark-bg pt-0 pb-0 transition-none " + classes}
    id="contact"
  >
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div className="bg-flex-holder bg-flex-cover">
        <Map type="3" dataStyle={dataStyle} />
      </div>
    </div>
    <div className="container-fluid">
      <div className="col-md-5 col-sm-7 pt-70 pb-70 pl-70 pr-70 xs-pt-20 xs-pb-80">
        <div className="section-title text-left">
          <h2
            className="cardo-font default-color"
            data-backfont={backfont || "Contact"}
          >
            {tagline}
          </h2>
          <h1 className="white-color">{title && parse(title)}</h1>
          {dash === "hide" ? null : <hr className="left-line white-bg" />}
        </div>
        <form
          name="contact-form"
          id="contact-form"
          action="php/contact.php"
          method="POST"
          className="contact-form-style-02"
        >
          <div className="messages"></div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <label htmlFor="name" className="white-color">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="md-input style-02"
                  id="name"
                  required
                  data-error="Your Name is Required"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <label htmlFor="email" className="white-color">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="md-input style-02"
                  id="email"
                  required
                  data-error="Please Enter Valid Email"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <label htmlFor="message" className="white-color">
                  Project Details
                </label>
                <textarea
                  name="message"
                  className="md-textarea style-02"
                  id="message"
                  rows="7"
                  required
                  data-error="Please, Leave us a message"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="text-left mt-20">
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-lg btn-color btn-square remove-margin"
                >
                  {textBtn || "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactOne;
