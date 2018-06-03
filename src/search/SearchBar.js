/*
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import './restaurant';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            query : []
        };
    }

    onInputChange = (event) => {
        this.setState({
            query : event.target.value
        })
    };

    onSearch = () => {
        alert(this.state);
    }

    render() {
        return (
            <div>

                <p>
                    Search Bar

                    <input type="text" className="form-control" aria-label="Small"
                           aria-describedby="inputGroup-sizing-sm"
                           name='text'
                           onChange={(e) => this.onInputChange(e)}
                           value={this.state.text}/>

                </p>
            </div>
        );
    }
}
export default SearchBar

*/
