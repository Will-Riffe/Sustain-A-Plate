import React, { useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Navbar from "./components/Navbar/Navbar"
import './App.css';


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ currentForm === "login" ? <Login /> : <Signup /> } />
        </Routes>
      </Router>
    </div>);
}

export default App;
