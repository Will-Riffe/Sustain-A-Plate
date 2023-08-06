import React, { useState } from 'react';
import './login.css';
import AuthService from "../../utils/auth";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [login] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await login({
        variables: {
          input: {
            username: username,
            password: password,
          },
        },
      });
      console.log({mutationResponse})

      const token = mutationResponse.data.loginUser.token;  // Changed to loginUser.js
      AuthService.login(token);  // This calls the non-static method on the AuthService instance.
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='login-form-container'>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type='username'
          placeholder='username'
          id='username'
          name='username'
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type='password'
          placeholder='***********'
          id='password'
          name='password'
        />
        <button type='submit'>Log In!</button>
      </form>
      <button className="state-change-btn" onClick={() => props.accountFormSwitch('signup')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
}
