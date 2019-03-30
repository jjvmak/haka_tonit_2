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
      lat: 60.4500,
      lng: 22.2933
    },
    zoom: 5
  };

  // rendering
  render() {
    console.log(this.state.asd);
    return (
      <div>
        <div style={{
          // header
          height: "15vh",
          backgroundColor: "#282c34",
          color: "white",

        }}>
          <div>
            {this.state.asd.map(item => (
              <li key={item.productString}>{item.productString}</li>
            ))}
          </div>
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
        <div style={{
          height: "15vh",
          backgroundColor: "#282c34"
        }} />
      </div>
    );
  }
}

export default BucketMap;
