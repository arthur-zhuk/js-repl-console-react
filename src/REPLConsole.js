import React, { Component } from 'react';
import './App.css';
import ConsoleInput from './components/console_input';

class REPLConsole extends Component {
  render() {
    return (
      <div className="App">
        <ConsoleInput />
      </div>
    );
  }
}

export default REPLConsole;
