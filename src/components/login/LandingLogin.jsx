import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Login.css';



function LandingLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setEmailError('')
    setPasswordError('')

   

    if (!email ) {
      setErrorMessage('Email is required');
      return;
    
    }

    if(!password) {
      setErrorMessage('Password is required')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

    if (!emailRegex.test(email)){
      setErrorMessage('invalid email format');
      return ;
    }

    const HOSTED_SERVER_URL = 'http://localhost:3000'; 

    try {
      const response = await axios.post(`${HOSTED_SERVER_URL}/login`, {
        email,
        password,
      });

      if (response.data.statusCode === 200) {
        
        console.log('Login successful');
        alert('Login successful!');
       
        localStorage.setItem('accessToken', response.data.data);
        navigate("/admin");
        
         
       
        
        
      } else {
        setErrorMessage('Login Failed !');
        return ;
        // alert('Login Failed!');
        // console.error('Login failed:', response.data.message);
        // console.error('Login failed:', response.data.message);
        
      }
    } catch (error) {
      console.log("Reached here")
      console.error('Error during login:', error.response.data.message);
      // alert(error.response.data.message)
    //  setErrorMessage(error.response.data.message)
    }
  };

  return (
    <>
    
    <div>
      
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <h1 className="opacity">LOGIN</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={handleEmailChange}
                
                
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
               
              
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="password"
                
              />
              {passwordError && <p className="error-message">{passwordError}</p>}
              <button className="opacity" type="submit" onClick={handleLogin}>
                SUBMIT
              </button>
            </form>
            <div className="register-forget opacity">
              <a href="">REGISTER</a>
              <a href="">FORGOT PASSWORD</a>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </div>
    </>
  );
}

export default LandingLogin;
