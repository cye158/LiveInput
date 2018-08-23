import React, { Component } from 'react';
import './App.css';
import store from './store' ;
import LiveInput from './LiveInput';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-header'>
          <h1>Live Text Input</h1>
        </div>
        <br/>
        <LiveInput store={store}/>
      </div>
    );
  }
}

export default App;
