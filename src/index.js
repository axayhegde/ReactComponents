import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import StringUtil from './StringUtil'
import GitHub from './GitHub'
import MapsComponent from './MapsComponent'

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <GitHub repoOwner = "axayhegde" repoName = "uglyNumbers"/>
      </div>
    );
  }
}

render(<MapsComponent />, document.getElementById('root'));
