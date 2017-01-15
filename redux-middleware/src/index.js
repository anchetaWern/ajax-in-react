import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index';

import dataService from './services/data-service';

let store = createStore(reducer,{}, compose(applyMiddleware(dataService)));

ReactDOM.render(
  (
  	<Provider store={store}>
  		<App />
  	</Provider>
  ),
  document.getElementById('root')
);

store.dispatch({type: 'GET_NAMES'});