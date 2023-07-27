import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Footer />
    </div>

  );
}

export default App;
