import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './signup.css';
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../utils/mutations';

export default function Signup(props) {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [registerUser] = useMutation(REGISTER);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(username);
    const mutationResponse = await registerUser({
      variables: { 
        username: setUserName.username, 
        email: setEmail.email, 
        password: setPass.password
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
      };


  return (
    <div className='signup-form-container'>
    <form className="login-form" onSubmit={handleSubmit}>
      <label forhtml= "username">Username</label>
      <input value={username} onChange={(e) => setUserName(e.target.value)} 
       type= 'username' placeholder='Username' id='username' name='username' />
      <label forhtml= "email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} 
       type= 'email' placeholder='example@email.com' id='email' name='email' />
      <label forhtml= "password">Password</label>
      <input value={password} onChange={(e) => setPass(e.target.value)} 
       type= 'password' placeholder='***********' id='password' name='password' />
      <button type='submit'>Sign Up!</button>
    </form>
    <button className="state-change-btn" onClick={() => props.accountFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
  }