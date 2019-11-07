import '../App.css';
import React, { Component } from 'react';
import Clock from './Clock';
import Form from './Form';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <Form />
        </header>
      </div>
    );
  }
}
