import React from "react";
import dataStyle from "../../data/Maps/style-3-map.json";
import Map from "../Map/Map";

const MapSection = () => (
  <section className="transition-none pt-0 pb-0">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Map type="3" dataStyle={dataStyle} />
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
