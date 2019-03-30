// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// import axios from 'axios';
import "./stylesheet.css";
import Results from "./Results.js";
import Result from "./Result.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.findProducts = this.findProducts.bind(this);
    this.state = {
      productCategory: "",
      navDisplay: "",
    };
  }

  componentDidMount() {}

  findProducts(item) {
    this.setState({ productCategory: item,
                    navDisplay: "inline-block"
     });
    //Tänne tulee bäckiin pyyntö, mistä saa juomat ynnä muut
  }

  renderContent() {
    return (
      <div className="container">
        <div className="toolbar">
          <h1>G-Market</h1>
          <ul>
            <li className="navLink" style={{display: this.state.navDisplay}}onClick={e => this.findProducts("Drinks")}>Drinks</li>
            <li className="navLink" style={{display: this.state.navDisplay}}onClick={e => this.findProducts("Food")}>Food</li>
            <li className="navLink" style={{display: this.state.navDisplay}}onClick={e => this.findProducts("Containers")}>Containers</li>
            <li className="navLink" style={{display: this.state.navDisplay}}onClick={e => this.findProducts("Misc")}>Misc</li>
          </ul>
        </div>
        <div className="content">
          {!this.state.productCategory !== "" && (
            <Results productCategory={this.state.productCategory} />
          )}
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />

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
