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

    this.state = { 
      cpvEmpty: false,
      selectedItem: 0,
     };
  }

  componentDidMount() {
  }

  openPopUp (itemId) {
    this.setState({ cpvEmpty: !this.state.cpvEmpty,
                    selectedItem: itemId });
    console.log("click");
    console.log(this.state.selectedItem);
  }

  render() {
    return (
      <div className="results">
        <div>
          {this.props.productList.map(item => (
            <Result 
              handleClick={ () => this.openPopUp(item.id)}
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
              type={ item.productType }
            />
          ))}
        </div>
        {!this.state.cpvEmpty === false && (
          <div onClick={this.openPopUp}>
            <CloserProductView selectedItem={this.state.selectedItem} allProducts={this.props.allProducts}/>
          </div>
        )}
        <p>{this.props.productCategory}</p>
      </div>
    );
  }
}

export default Results;
