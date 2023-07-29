import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label forhtml= "email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} 
       type= 'email' placeholder='example@email.com' id='email' name='email' />
      <label forhtml= "password">Password</label>
      <input value={password} onChange={(e) => setPass(e.target.value)} 
       type= 'password' placeholder='***********' id='password' name='password' />
      <button type='submit'>Log In!</button>
    </form>
    <button>Don't have an account? Register here.</button>
    </>
  )
}