import React, { Component } from 'react';
import List from '../components/List';

import 'whatwg-fetch';

class ListContainer extends Component {

  constructor(props, context) {
  	super();
  	this.state = {
  		names: []
  	};
  }

  componentWillMount() {
    var self = this;
    fetch('http://localhost:3000/data.json')
      .then(function(response) {
          if (response.status >= 200 && response.status < 300) {
            return response.text();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
      })
      .then(function(body) {
        self.setState({
          names: JSON.parse(body).names
        });
      });
  }

  render() {
    return <List names={this.state.names} />;
  }

}

export default ListContainer;