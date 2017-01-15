import React, { Component } from 'react';
import List from './List';

class ListContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      names: []
    };
  }

  componentWillMount() {
    this.context.store.subscribe(() => {
        let state = this.context.store.getState();
        this.setState({
          names: state.names
        });
        
    });
  }

  render() {
    return <List names={this.state.names} />;
  }

}

ListContainer.contextTypes = { store: React.PropTypes.object };
export default ListContainer;