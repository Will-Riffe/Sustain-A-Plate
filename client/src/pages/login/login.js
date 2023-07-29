import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label forhtml= "email">email</label>
      <input type= 'email' placeholder='example@email.com' id='email' name='email' />
      <label forhtml= "password">Password</label>
      <input type= 'password' placeholder='***********' id='password' name='password' />
      <button>Log In!</button>
    </form>
  )
}