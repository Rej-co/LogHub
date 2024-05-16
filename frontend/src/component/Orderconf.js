import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Requestp3 from './Requestp3';
import Cashp from './Cashp';
import './Orderconf.css';

const Orderconf = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  return (
    <div className='orderconf'>
      <Requestp3 />
       {isOverlayVisible && (
        <div className='orderconf-overlay'>
            <div className='orderconfpage'>

             <h5> Order Confirmed </h5>
             <p> Please pay to the dispatch at the pickup location </p>

             <a href='#' className='btn btn-cash'>OK</a>

            </div>
        </div>

      
        )}
    </div>
  )
}

export default Orderconf;