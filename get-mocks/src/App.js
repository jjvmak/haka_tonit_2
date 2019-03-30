import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            asd: [],
        };
    }

    componentDidMount() {
        var that = this;
        const url = 'http://localhost:6900/api/products/containers/buckets'
        fetch(url)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                that.setState({ asd: data });
            });
    }

    render() {
        return(
            <div>
                <h1>Ämpärit :D</h1>
                <div>{this.state.asd.map( item => (
                    <li key={item.productString}>{item.productString}</li>
                ))}
                </div>
            </div>
        );
    }
}

export default App;
