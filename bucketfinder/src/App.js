import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";

// Google Maps
var APIkey = "AIzaSyChKzCo94RAilpNe8MQOzBMjYC7XhuaEGs";

const Marker = () => (
  <div>
    <img
      style={{ margin: "-96px 0 0 -80px" }}
      src="https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/319027/gambina-muovipullo.jpg"
      alt="marker"
    />
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div>
        <div id="header" />
        <div style={{ height: "70vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: APIkey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={59.955413} lng={30.337844} />
          </GoogleMapReact>
        </div>
        <div id="footer" />
      </div>
    );
  }
}

export default SimpleMap;
