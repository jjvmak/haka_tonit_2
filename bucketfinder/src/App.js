import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";
import bucket from "./bucket.png";

// Google Maps
var APIkey = "AIzaSyChKzCo94RAilpNe8MQOzBMjYC7XhuaEGs";

const Marker = () => (
  <div>
    <img src={bucket} alt="marker" style={{ width: "70px", height: "90px", margin: "-45px 0 0 -35px" }} />
  </div>
);

class BucketMap extends Component {
  //requests
  constructor(props) {
    super(props);
    this.state = {
      asd: []
    };
  }
  componentDidMount() {
    var that = this;
    const url = "http://localhost:6900/api/products/containers/buckets";
    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        that.setState({ asd: data });
      });
  }

  // map props
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  // rendering
  render() {
    console.log(this.state.asd);
    return (
      <div>
        <div id="header" />
        <div>
          {this.state.asd.map(item => (
            <li key={item.productString}>{item.productString}</li>
          ))}
        </div>
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

export default BucketMap;
