// Import the React and ReactDOM libraries
import React from "react";
// import axios from 'axios';
import "./stylesheet.css";

class CloserProductView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedProduct: undefined};
  }

  componentDidMount() {
    // var i;
    // var j;
    // for(i = 0; this.props.allProducts.length; i++){
    //    for(j = 0; this.props.allProducts.length[i]; j++){
    //      if(this.props.allProducts[j].id === this.props.selectedItem){
    //        this.setState({selectedProduct: this.state.allProducts[i]})
    //      }
    //    }
    // }
  }

  render() {
    console.log(this.props.allProducts[0])
    console.log(this.props.selectedItem)
    console.log(this.props.selectedProduct)
    return (
      <div className="shadowingBox">
        <div className="closerProductView">
          <div className="realContent">
            <div className="closerImageDiv">
              <img
                alt="lol"
                src="https://www.westons-cider.co.uk/wp-content/uploads/sites/56/2017/10/Westons-Shop-Images-HenryWestons-Vintage-500ml.jpg"
              />
            </div>
            <div className="textInfo">
              <h2>Tuotenimi</h2>
              <p>Hinta 10€</p>
              <h2>Tuotetyyppi</h2>
              <p>Premium cider</p>
            </div>
            <div className="info">
              <h2>In stores:</h2>
              <p>XOGGLE: 1</p>
              <p>INEAR: 1</p>
              <p>TASMANIA: 2</p>
              <p>TASMANIA: 2</p>
              <p>TASMANIA: 3</p>
            </div>
          </div>
          <div className="recommends">
            <h2>Recommends</h2>
            <div className="recImageDiv">
              <img
                alt="lol"
                src="https://www.ikea.com/au/en/images/products/socker-bucket-plant-pot__0570051_PE666165_S4.JPG
              "
              />
            </div>
            <p>Hinta 50€</p>
          </div>
        </div>
      </div>
    );
  }
}

CloserProductView.defaultProps = {
  productname: "Premium Cider",
  price: 5.8,
  store1stock: 5,
  store2stock: 0,
  store3stock: 100
};

export default CloserProductView;
