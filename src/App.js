import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header row">
          <div className="col-md-12">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              We're working on a better experience for you.
            </p>
            <a
              className="App-link"
              href="mailto:contact@patagoniaoils.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
