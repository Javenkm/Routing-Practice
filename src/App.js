import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Mixed from './components/Mixed';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Router>
          <Home path="/home" />
          <Number path="/:id" />
          <Word path ="/:word" />
          <Mixed path="/hello/:bgColor/:txtColor" />
        </Router>
      </div>
    </div>
  );
}

export default App;
