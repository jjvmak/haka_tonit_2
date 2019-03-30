// Import the React and ReactDOM libraries
import React from "react";
// import axios from 'axios';
import "./stylesheet.css";
import Result from "./Result.js";
import CloserProductView from "./CloserProductView";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.openPopUp = this.openPopUp.bind(this);

    this.state = { cpvEmpty: false };
  }

  componentDidMount() {}

  openPopUp() {
    this.setState({ cpvEmpty: !this.state.cpvEmpty });
    console.log("click");
  }

  render() {
    return (
      <div className="results">
        <div onClick={this.openPopUp}>
          {this.props.productList.map(item => (
            <Result
              key={item.productString}
              productname={item.productString}
              price={item.priceInEuro}
              store1stock={
                item.stockByStoreGUID["045f5e5e-75fe-49bd-8087-3d56b98f9ec4"]
              }
              store2stock={
                item.stockByStoreGUID["98ebb71a-fabb-4bf1-83e1-649341569dad"]
              }
              store3stock={
                item.stockByStoreGUID["ad43020a-978c-45d5-8b10-ff2841866448"]
              }
            />
          ))}
        </div>
        {!this.state.cpvEmpty === false && (
          <div onClick={this.openPopUp}>
            <CloserProductView />
          </div>
        )}
        <p>{this.props.productCategory}</p>
      </div>
    );
  }
}

export default Results;
