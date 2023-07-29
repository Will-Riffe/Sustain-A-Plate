import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './signup.css';

export default function Signup(props) {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [acctType, setAcct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(username);
    console.log(acctType);
  }

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
      <label forhtml= "account-type">Account Type</label>
      <input value={acctType} onChange={(e) => setAcct(e.target.value)} 
       type= 'acctType' placeholder='Donor or Recipient?' id='acctType' name='acctType' />
      <button type='submit'>Sign Up!</button>
    </form>
    <button className="state-change-btn" onClick={() => props.accountFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}