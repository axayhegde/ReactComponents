import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
     
    };
       
  }
    componentDidMount(){
      console.log(this.props.repoName);
      console.log(this.props.repoOwner);
    fetch('https://api.github.com/repos/' + this.props.repoOwner + '/' + this.props.repoName)
    .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data: json,
         
        });
      });
  }

  render() {
    return (
      <div>
       
        <p>RepoId :  {this.state.data.id}</p>
        <br/>
         <p>RepoName :  {this.state.data.name}</p>
         <br/>
         <p>Repo URL :  {this.state.data.url}</p>
      </div>
    );
  }
}
export default GitHub

