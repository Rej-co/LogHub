import React, { useState } from 'react';
import './Requestp1.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Requestp1 = () => {
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


      <div className='pickup'>
        <div className='row'>
            <div className='col-6'>
                <h5>Pickup Details</h5>
                <div className='space1'></div>
                <div className='form'>
                 <label for="name">Customer Name *</label><br />
                 <input type='text' id='name' name='name' required /><br /><br />

                 <label for="email"> Email Address *</label><br />
                 <input type="email" id="email" name="email" required /><br /><br />

                 <label for="phone">Pickup Phone Number *</label><br />
                 <input type="tel" id="phone" name="phone"  placeholder='+234'required /><br /><br />

                 <label for="address">Pickup Address *</label><br />
                 <input type='text' id='address' name='address' required /><br /><br />

                 <label for="category">Category *</label><br />
                 <input type='category' id='category' name='category' placeholder='Input Category'required /><br /><br />

                </div>

            </div>

            <div className='col-6'>
              <h5>Delivery Point 1</h5>
              <div className='space1'></div>
                <div className='form'>
                 <label for="name">Recipient Name *</label><br />
                 <input type='text' id='name' name='name' required /><br /><br />

                 <label for="phone">Pickup Phone Number *</label><br />
                 <input type="tel" id="phone" name="phone"  placeholder='+234'required /><br /><br />

                 <div className='pickupadd'>
                 <label for="address">Pickup Address *</label><br />
                 <input type='text' id='address' name='address' required /><br /><br />
                 </div>

                 <span id="add-field"><em>+ Add another deliverypoint</em></span><br /><br/>

                 <label for="time">Pick Up Time*</label><br />
                 <input type='time' id='time' name='time' placeholder='NOW' required /><br /><br />

                </div>

                    
            </div>


        </div>
      </div>


      <div className='proceed'>
      <a href='/requestp2' className='btn btn-primary'>Proceed</a>
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

export default Requestp1;