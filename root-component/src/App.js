import React, { Component } from 'react';
import List from './components/List';

import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      names: []
    };
  }

  render() {
    return (
      <div>
        <List names={this.state.names} />
      </div>
    );
  }

  componentWillMount() {
    var self = this;
    axios.get('http://localhost:3001/data.json')
    .then(function (response) {
      self.setState({
        names: response.data.names
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}