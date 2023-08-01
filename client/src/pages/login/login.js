import React, { useState } from 'react';
import './login.css';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [login, { error }] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          input: {
            username: email,
            password: password,
          },
        },
      });
      
      const token = mutationResponse.data.loginUser.token;  // Changed to loginUser.js
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='login-form-container'>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='example@email.com'
          id='email'
          name='email'
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
