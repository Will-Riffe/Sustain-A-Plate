import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './login.css';
// import Auth from '../../utils/auth'

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
  }



  
  return (
    <div className='login-form-container'>
    <form className="login-form" onSubmit={handleSubmit}>
      <label forhtml= "email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} 
       type= 'email' placeholder='example@email.com' id='email' name='email' />
      <label forhtml= "password">Password</label>
      <input value={password} onChange={(e) => setPass(e.target.value)} 
       type= 'password' placeholder='***********' id='password' name='password' />
      <button type='submit'>Log In!</button>
    </form>
    <button className="state-change-btn" onClick={() => props.accountFormSwitch('signup')}>Don't have an account? Register here.</button>
    </div>
  )
}