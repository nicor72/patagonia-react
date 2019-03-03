import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            EN DESARROLLO
          </p>
          <a
            className="App-link"
            href="mailto:contact@patagoniaoils.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </header>
      </div>
    );
  }
}

export default App;
