// Import the React and ReactDOM libraries
import React from "react";
// import axios from 'axios';
import "./stylesheet.css";
import Result from "./Result.js";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="results">
        <div>
          {this.props.producList.map(item => (
            <Result
              key={item.productString}
              productname={item.productString}
              price={item.priceInEuro}
            />
          ))}
        </div>
        <p>{this.props.productCategory}</p>
      </div>
    );
  }
}

export default Results;
