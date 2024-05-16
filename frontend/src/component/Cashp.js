import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Requestp3 from './Requestp3';
import './Cashp.css';


const Cashp = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  return (
    <div className='cashpayment'>
      <Requestp3 />
       {isOverlayVisible && (
        <div className='cashpayment-overlay'>
            <div className='cashpaymentpage'>

             <h5> Cash Payment</h5>
             <p> Please pay to the dispatch at the pickup location </p>

             <a href='/orderconf' className='btn btn-cash'>OK</a>

            </div>
        </div>

      
        )}
    </div>
  )
}

export default Cashp;