import React from "react";
import GoogleMap from "google-map-react";
import Marker from "./Marker";
import pinImg from "webapp/images/pin.png";

const Map = ({ type, dataStyle }) => {
  const defaultProps = {
    center: {
      lat: 42.008315, // change value
      lng: -88.163807, // change value
    },
    zoom: 12,
  };

  const mapStyle = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    scrollwheel: false,
    styles: dataStyle,
  };

  return (
    <div id={type ? "map-style-" + type : "myMap"} className="wide">
      <GoogleMap
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={mapStyle}
      >
        <Marker
          icon={pinImg}
          position={{
            lat: defaultProps.center.lat,
            lng: defaultProps.center.lng,
          }}
        />
      </GoogleMap>
    </div>
  );
};
export default Map;
