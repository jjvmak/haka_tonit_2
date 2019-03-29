// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

class App extends React.Component{
    state = {};
    
    componentDidMount(){

    }
    
    renderContent(){
        return <div>
            <p>Pls buy Gambina</p>
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