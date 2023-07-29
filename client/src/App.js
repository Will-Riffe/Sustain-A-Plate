import React, { useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Profile from './pages/profile/profile';
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar"
import './App.css';


function App() {
  const [accountForm, setAccountForm] = useState('login');
  const changeAccountForm = (accountFormName) => {
    setAccountForm(accountFormName)
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={ accountForm === "login" ? 
            <Login accountFormSwitch={changeAccountForm} /> 
          : <Signup accountFormSwitch={changeAccountForm}/> } />
        </Routes>
        <Footer />
      </Router>
    </div>);
}

export default App;
