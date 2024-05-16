import React, { useState } from 'react';
import { Button } from "bootstrap";
import './Delivery.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Delivery = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
 <div>
     
    <div className='container'>
     <div className='row'>
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

     <div className='reqdeloffice'>
      <div className='row'>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-6">
          <div className="card custom-card h-100">
            <img src="https://res.cloudinary.com/dntv0bst8/image/upload/v1715739931/parcelde_nyj6mo.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Parcel Delivery</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.</p>
              <p>Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.</p>
              <a href="/requestp1" className="btn btn-primary">Request Parcel Delivery</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-6">
          <div className="card custom-card h-100">
            <img src="https://res.cloudinary.com/dntv0bst8/image/upload/v1715739960/truckdel_wf8eqw.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Request Truck Delivery</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.</p>
              <p>Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.</p>
              <a href="#" className="btn btn-primary">Request Truck Delivery</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-6">
          <div className="card custom-card h-100">
            <img src="https://res.cloudinary.com/dntv0bst8/image/upload/v1715739924/offhome_xql660.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Office/Home Relocation</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.</p>
              <p>Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.</p>
              <a href="#" className="btn btn-primary">Request Office/Home Relocation</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-6">
          <div className="card custom-card h-100">
            <img src="https://res.cloudinary.com/dntv0bst8/image/upload/v1715739893/intdel_naeywm.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">International Delivery</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.</p>
              <p>Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.</p>
              <a href="#" className="btn btn-primary">Request International Delivery</a>
            </div>
          </div>
        </div>
      </div>

     </div>


     </div>
    </div>

    <div className='container-bottom'>
            <div className='row'> 
             <div className="col-3">
                    <h3 className="card-title">LogiHub</h3>

                    <div className='delicons'>
                    <FontAwesomeIcon icon={faFacebookF} className='facebook'/>
                    <FontAwesomeIcon icon={faTwitter} className='twitter'/>
                    <FontAwesomeIcon icon={faInstagram} className='instagram'/>
                    <FontAwesomeIcon icon={faLinkedinIn} className='linked'/>
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

export default Delivery;