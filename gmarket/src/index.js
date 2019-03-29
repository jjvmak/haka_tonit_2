// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import './stylesheet.css'

class App extends React.Component{
    state = {};
    
    componentDidMount(){

    }
    
    renderContent(){
        return <div className="container">
            <div className="toolbar">
                <h1>G-Market</h1>
            </div>
            <div className="content">
                <ul>
                    <li>Drinks</li>
                    <li>Food</li>
                    <li>Buckets</li>
                    <li>Misc</li>
                </ul>
                <div className="footer">
                    <p>Pls buy Gambina :)</p>
                </div>
            </div>
        </div>
    }
    
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
        
    
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));