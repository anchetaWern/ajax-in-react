import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return <ul> {this.props.names.map(this.renderItem)} </ul>;
  }

  renderItem(name) {
    return <li key={name}>{name}</li>;
  }
}

export default List;