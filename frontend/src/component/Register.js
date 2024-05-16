import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get('http://localhost:4000/user/register', {email, password}
    )
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>

     <nav className="navbar navbar-expand-sm">
      <div className="containers">
        <a className="navbar-brand" href="#">Logi<span className="hub">Hub</span></a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Conditionally render the collapsible content */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a to="/Vendor">Become a Vendor</a>
            </li>
            <li className="nav-item">
              <a to="/Support">Support</a>
            </li>
            <li className="nav-item">
              <a to="/About">About</a>
            </li>
            <li className="nav-item">
              <a to="/Login">Login </a>
            </li>
          </ul>
          {/* Button */}
          <Link to='/register' className="btn btn-primary" type="button">Register</Link>
        </div>
      </div>
    </nav>

      <div className='container'>
       <div className='row'>
         <div className='col-6'>
          <div className='white'>
           <h1> Sign up as a customer </h1>
           <p> Send your goods fast, cheap, comfortable and safe </p>
           <a href='#' className='btn btn-primary'> Get Started </a>
          </div>
         </div>

         <div className='col-6'>
          <div className='dark'>
           <h1> Become a vendor </h1>
           <p> Do you own a small logistics business and you will like to increase your customer reach, and double your earning?, become a vendor of logiHub, you register your vehicles with us, we send you customers. </p>
           <a href='#' className='btn btn-primary'> Get Started </a>
          </div>
         </div>


       </div>
      </div>
    </div>
  )
}

export default Register;