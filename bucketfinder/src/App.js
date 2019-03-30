import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";

// Google Maps
var APIkey = "AIzaSyChKzCo94RAilpNe8MQOzBMjYC7XhuaEGs";

// map styling
const mapStyle = {
  height: "50vh"
};
const markerStyle = {
  height: "50px",
  width: "50px",
  marginTop: "-50px"
};
const imgStyle = {
  height: "100%"
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
        <div
          style={{
            // header
            height: "15vh",
            width: "100%",
            backgroundColor: "grey"
          }}
        />
        <div style={{ height: "70vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: APIkey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div
          style={{
            // footer
            height: "15vh",
            width: "100%",
            backgroundColor: "grey"
          }}
        />
      </div>
    );
  }
}

export default SimpleMap;
