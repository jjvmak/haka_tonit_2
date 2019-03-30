// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// import axios from 'axios';
import "./stylesheet.css";
import Results from "./Results.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.findProducts = this.findProducts.bind(this);
    this.state = {
      productCategory: "",
      productList: [],
      navDisplay: ""
    };
  }

  componentDidMount() {}

  findProducts(item) {
    this.setState({ productCategory: item, navDisplay: "inline-block" });
    //Tänne tulee bäckiin pyyntö, mistä saa juomat ynnä muut
    var that = this;
    var realUrl;
    if (item === "Drinks") {
      realUrl = "/api/products/drinks";
    } else if (item === "Food") {
      realUrl = "/api/products/foods";
    } else if (item === "Buckets") {
      realUrl = "/api/products/containers";
    } else if (item === "Misc") {
      realUrl = "/api/products/misc";
    }
    const url = realUrl;

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ productList: data });
      });
  }

  renderContent() {
    console.log(this.state.productList);

    return (
      <div className="container">
        <div className="toolbar">
          <h1>G-Market</h1>
          <ul>
            <li
              className="navLink"
              style={{ display: this.state.navDisplay }}
              onClick={e => this.findProducts("Drinks")}
            >
              Drinks
            </li>
            <li
              className="navLink"
              style={{ display: this.state.navDisplay }}
              onClick={e => this.findProducts("Food")}
            >
              Food
            </li>
            <li
              className="navLink"
              style={{ display: this.state.navDisplay }}
              onClick={e => this.findProducts("Buckets")}
            >
              Containers
            </li>
            <li
              className="navLink"
              style={{ display: this.state.navDisplay }}
              onClick={e => this.findProducts("Misc")}
            >
              Misc
            </li>
          </ul>
        </div>

        <div className="content">
          {!this.state.productCategory !== "" && (
            <Results productList={this.state.productList} />
          )}

          <div className="footer">
            <p>Pls buy Gambina :)</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
