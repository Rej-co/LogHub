import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCircleDot, faCreditCard, faUniversity, faMoneyBill, faMoneyBill1, faMoneyBill1Wave, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Requestp3.css';

const Requestp3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
       setIsOpen(!isOpen);
     };
  return (
    <div>
       
      <div className='containerrp1'>
      <nav className="navbar navbar-expand-sm">
       <div className="container">
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
              <Link to="/login">Login </Link>
            </li>
          </ul>
          {/* Button */}
          <Link to='/register' className="btn btn-primary" type="button">Register</Link>
        </div>
       </div>
      </nav>
     </div>

     <h2 className='reqp'> Request Parcel Delivery </h2>

<div className='reqcircle'>
  <div className='circle1'>1</div>
   <div className='circle2'>2</div>
  <div className='circle3'>3</div>
</div>

<div className='reqline'>

<h5>Shipping</h5>
<div className='space1'></div>
<h5>Payment</h5>
<div className='space2'></div>
<h5>Confirmation</h5>
</div>


<div className='req2cont'>
  <div className='row'>

     <div className='col-6'>
       <div className='pickupreq2'>
         <h6 className='pup'>Pickup </h6>
         <FontAwesomeIcon icon={faCircleDot} className='reqcircle2' />
         <input type='text' id='name' name='name' placeholder='Magic Land, No 1, Kukwaba Hills, Constitution Ave, Wuye, Abuja' /><br /><br />
       </div> 

       <div className='d1loc'>
       <h6 className='d1'>D1</h6>
       <FontAwesomeIcon icon={faMapMarkerAlt} className='pin' />
       <input type='text' id='name' name='name' placeholder='Jabi Lake Mall,Bala Sokoto Way, Jabi 900108, Abuja' /><br /><br />
       </div>

       <div className='godaka'>
       <h6>Gokada</h6>
       <p>35km <span className='dot'></span> 20min</p>
       <h6>2 min away from you</h6>
       <h4 className='price'> &#x20A6; 1,700</h4>
       <div className='space1'></div>
      </div>

      <div className='req3pt'>
        <p className='pm3'>Payment Method <span className='req3cop'>Cash on pickup</span></p>
        <a href='/cashp' className='btn btn-primary' id='btn'>Confirm Order</a>
      </div>

      </div>

      

        <div className='col-6'>

        </div>
       
      </div>
      </div>

      <div className='container-bottom'>
            <div className='row'> 
             <div className="col-3">
                    <h3 className="card-title">LogiHub</h3>
                    <div className='delicons'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faInstagram} />
                    </div>

              </div>
              <div className="col-3">
                    <h3 className="card-title">Company</h3>
                    <p className="card-text">Contact us</p>
              </div>
              <div className="col-3">
                    <h3 className="card-title">Legal</h3>
                    <p className="card-text">Privacy Policy</p>
                    <p className="card-text2">Terms of Service </p>
              </div>
              <div className="col-3">
                    <h3 className="card-title">Help</h3>
                    <p className="card-text">Read our FAQs</p>
              </div>
            </div>
            <hr className='bold-line'/>
            Copyright &copy; 2022 LogiHub. All rights reserved.
          </div>


    </div>
  )
}

export default Requestp3;