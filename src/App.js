import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountShow from './Component/CountShow'
import {Provider} from 'react-redux'
import store from './reduce/store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <CountShow/>
      </Provider>      
    );
  }
}

export default App;
