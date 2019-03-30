// Import the React and ReactDOM libraries
import React from "react";
// import axios from 'axios';
import "./stylesheet.css";

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="productContainer">
        <div className="productContent">
          <div className="imageDiv">
            <img
              alt="lol"
              src="https://www.westons-cider.co.uk/wp-content/uploads/sites/56/2017/10/Westons-Shop-Images-HenryWestons-Vintage-500ml.jpg"
            />
          </div>
          <div className="contentInfoDiv">
            <h2>{this.props.productname}</h2>
            <p>Price {this.props.price}€</p>
            <h3>In stores:</h3>
            <p>R-Citymarket: {this.props.store1stock}</p>
            <p>Verkkokauppa: {this.props.store2stock}</p>
            <p>Cool Store: {this.props.store3stock}</p>
          </div>
        </div>
      </div>
    );
  }
}

Result.defaultProps = {
  productname: "Premium Cider",
  price: 5.8,
  store1stock: 5,
  store2stock: 0,
  store3stock: 100
};

export default Result;
