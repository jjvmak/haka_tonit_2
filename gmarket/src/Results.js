// Import the React and ReactDOM libraries
import React from 'react';
// import axios from 'axios';
import './stylesheet.css'



class Results extends React.Component{
    constructor(props) {
        super(props);
   
    this.state = {
      };
    }
    
    componentDidMount(){

    }

    render(){
        return (
            <div>
                <p>{this.props.productCategory}</p>
            </div>
            
        )
    }
        
    
};

export default Results;