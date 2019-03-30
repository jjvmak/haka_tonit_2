// Import the React and ReactDOM libraries
import React from "react";
import axios from 'axios';
import "./stylesheet.css";

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        basket: "https://www.containerstore.com/catalogimages/315935/10071527-plastic-wicker-basket-round.jpg?width=1200&height=1200&align=center",
        cider: "https://www.westons-cider.co.uk/wp-content/uploads/sites/56/2017/10/Westons-Shop-Images-HenryWestons-Vintage-500ml.jpg",

      }
    };
  }

  componentDidMount() {
    this.getPic(this.props.productType);
  }

  async getPic(searchTerm){
    const response = await axios.get('https://unsplash.com/search/photos/', {
    params: { query: searchTerm},   
    headers: {
          Authorization: 'Client-ID d6088a9c5cafd5f9ae752ea5a44e6a7a05fdf0a136824cccdecd1cea6a67471a  ',

        }
    })
  }

  render() {
    return (
      <div className="productContainer">
        <div className="productContent">
          <div className="imageDiv">
            <img
              alt="lol"
              src="https://www.containerstore.com/catalogimages/315935/10071527-plastic-wicker-basket-round.jpg?width=1200&height=1200&align=center"
              // src="https://www.westons-cider.co.uk/wp-content/uploads/sites/56/2017/10/Westons-Shop-Images-HenryWestons-Vintage-500ml.jpg"
            />
          </div>
          <div className="contentInfoDiv">
            <h2>{this.props.productname}</h2>
            <div className="contentSpecs">
              <p>Price {this.props.price}€</p>
              <h3>In stores:</h3>
              <p>XOGGLE: {this.props.store1stock}</p>
              <p>INEAR: {this.props.store2stock}</p>
              <p>TASMANIA: {this.props.store3stock}</p>
            </div>
            
            
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
