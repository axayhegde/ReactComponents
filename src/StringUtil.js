import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class StringUtil extends Component {
  constructor() {
    super();
    
  }

  caseChange(){
    if(this.props.operation == 'upper'){
      this.name = this.props.children.toUpperCase();
    }else if(this.props.operation == 'lower'){
      this.name = this.props.children.toLowerCase();
    }
  }

  render() {
    this.caseChange();
    return (
      <div>
       
        <p>
              {this.props.operation.call(this.props.children)}    
       
        </p>
      </div>
    );
  }
}
export default StringUtil

