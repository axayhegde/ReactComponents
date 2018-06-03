import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import './restaurant';
import SearchBar from './search/SearchBar'

class SearchComponent extends Component {
    constructor() {
        super();

        this.state = {
            data : []
        };

    }

    render() {
        return (
            <div>

                <p>
                    Search Component
                   {/* <SearchBar />*/}
                    {/*<SearchResults />*/}

                </p>
            </div>
        );
    }
}
export default SearchComponent

