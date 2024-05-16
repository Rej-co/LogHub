import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
  axios.get('http://localhost:4000/user/login', {email, password}
  )
}

  return (
    <div className='login'>

      <div className='containerlogin'>
       <div className='row'>

        <div className='col-12 col-lg-6'>
          <img src='https://res.cloudinary.com/dntv0bst8/image/upload/v1715739898/lock___key_g8wmcm.png' />
        </div>


        <div className='col-12 col-lg-6'>
        <h1>Welcome Back!</h1>
        <p>Et laoreet est gravida sociis acru risus faucibus ac. </p>
        <FontAwesomeIcon icon={faGoogle} size='3x' />
        <FontAwesomeIcon icon={faFacebook} size='3x' />
        <FontAwesomeIcon icon={faApple} size='3x' />

        <div className='or'>
          OR
        </div>

       <div className='loginfrm'>

       <label for="email"> Email Address </label><br />
        <input type="email" id="emailfrm" name="email" placeholder='Email' required /><br /><br />

        <label for="password">Password</label><br />
        <input type="password" id="password" name="password" required /><br /><br />
      
        <label>
        <input type="checkbox" name="rememberMe" />
        Remember me
      </label>
      <br />
      <a href="/reset-password">Reset password</a>
      <br />

      <a href='#' className='btn btn-primary'> Login </a>
       </div>
        
        <p>Dont have an account? <a href='/register' className='signup'>Signup</a></p>
        </div>

       </div>
      </div>

    </div>
  );
}

export default Login;