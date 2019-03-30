import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";
import bucket from "./bucket.png";

// Google Maps
var APIkey = "AIzaSyChKzCo94RAilpNe8MQOzBMjYC7XhuaEGs";

const Marker = () => (
    <div>
        <img src={bucket} alt="marker" style={{width: "70px", height: "90px", margin: "-45px 0 0 -35px"}}/>
    </div>
);

class BucketMap extends Component {
    //requests
    constructor(props) {
        super(props);
        this.state = {
            buckets: [],
            stores: []
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
                that.setState({buckets: data});
            });
        const storeUrl = "http://localhost:6900/api/stores";
        fetch(storeUrl)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (data) {
                that.setState({stores: data});
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
        // console.log(this.state.buckets);
        // console.log(this.state.stores);
        return (
            <div style={{
                backgroundColor: "#282c34"
            }}>
                <div style={{
                    // header
                    height: "15vh",
                    color: "white",
                    paddingTop: "10px"
                }}>
                    <div style={{
                        // title
                        textAlign: "center",
                        fontSize: "22px"
                    }}>
                        <h1>BucketFinder</h1>
                    </div>
                    <div style={{
                        // motto
                        textAlign: "center",
                        fontSize: "17px",
                    }}>
                        <p>Worlds most extensive bucket-retailer locator</p>
                    </div>


                    {/* <div>
            {this.state.asd.map(item => (
              <li key={item.productString}>{item.productString}</li>
            ))}
          </div> */}
                </div>
                <div style={{height: "70vh", width: "100%"}}>


                    <GoogleMapReact
                        bootstrapURLKeys={{key: APIkey}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >

                        {this.state.stores.map(item => (
                            // <li >{item.productString}</li>
                            <Marker key={item.guid} lat={item.latitude} lng={item.longitude}/>
                        ))}


                    </GoogleMapReact>
                </div>
                <div style={{
                    color: "white",
                    paddingTop: "20px"
                }}>
                    <div style={{
                        // bottom
                        textAlign: "center",
                        fontSize: "25px",
                        fontFamily: "Lora, serif",
                        fontWeight: "lighter"
                    }}>
                        <a href="https://g-market.herokuapp.com/">Powered by G-Market</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BucketMap;
