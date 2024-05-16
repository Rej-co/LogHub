import React, { useState } from 'react';
import { Button } from "bootstrap";
import "./Home.css";
import { Link } from 'react-router-dom';
import "./Register.js";
import "./Delivery.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';




const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div>
    
   <div className='background-img'>
    
     <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" href="#">Logi<span className="hub">Hub</span></a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Conditionally render the collapsible content */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-itemhome">
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
            <li className="nav-itemlogin">
              <Link to="/login">Login </Link>
            </li>
          </ul>
          {/* Button */}
          <Link to='/register' className="btn btn-primary" type="button">Register</Link>
        </div>
      </div>
    </nav>


    <div className='top-section'>
        <h1>The one-stop hub for everything logistics</h1>
        <p>Best prices. Seamless experience. Multiple service option</p>
        <Link to='/delivery' className='btn btn-primary'>Send Delivery Request Now</Link>
    </div>

   </div>

   <div className="container mt-3">
     <div className="row">
              <div className="col-4">
                <div className="card custom-card h-100">
                  <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_16:9/v1715739906/Medable_svg_vrz1hi.png' />
                  <div className="card-body">
                    <h2 className="card-title"></h2>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card h-100">
                <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_16:9/v1715739919/Newchip_-_png_xu585m.png' alt='newchip' />
                  <div className="card-body">
                    <h6 className="card-title"></h6>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card h-100">
                <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_16:9/v1715739969/Paxos_yfed5c.png' alt='paxos' />
                  <div className="card-body">
                    <h6 className="card-title"></h6>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
     </div>




    <div className="containercover mt-3">
            <div className="row">

              <div className="col-12 col-lg-6">
                <div className="card custom-card h-100">
                  <div className="card-body">
                    <h2 className="card-title">We Cover Everything Logistics</h2>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="card custom-card h-100">
                  <div className="card-body">
                    <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715770284/pardeli_poqhgs.png' />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="card custom-card h-100">
                  <div className="card-body">
                    <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715770487/truckdeli_yxk4ez.png' />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="card custom-card h-100">
                  <div className="card-body">
                  </div>
                </div>
              </div>


              <div className="col-12 col-lg-3">
                <div className="card custom-card h-100">
                  <div className="card-body">
                   <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715770466/offhrei_iglxti.png'  />
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="card custom-card h-100">
                  <div className="card-body">
                   <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715770480/indeli_duzsof.png' />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <a href='#' className='btn btn-primary'>Request Delivery Now</a>

          <div className='whychooseus'>
            <div className='row'>
            <h2 className='whycu'>Why Choose Us</h2>
            <div className="col-12 col-lg-4">
                <div className="card custom-card2 h-100">
                  <div className="card-body">
                    <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715773567/evs_hbmaxn.png' />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="card custom-card2 h-100">
                  <div className="card-body">
                    <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715773577/gtbp_lylugr.png' />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="card custom-card2 h-100">
                  <div className="card-body">
                    <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715773562/fds_q3mlba.png' />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="card custom-card2 h-100">
                  <div className="card-body">
                   <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715773569/ft_okehdz.png'  />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="card custom-card2 h-100">
                  <div className="card-body">
                   <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715773574/sp_svvtix.png'  />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="card custom-card2 h-100">
                  <div className="card-body">
                   <img src='https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,ar_1:1/v1715773559/cs_rja9ay.png'  />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='container-info'>
            <div className='row'>
                <div className='col-12 co-lgl-9'>
                <h2>Are you a small logistic company?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed tincidunt dui. Vestibulum feugiat lobortis ultrices. </p>
                <p>Fusce ut ornare ex, ut suscipit felis. Curabitur eu tellus purus.</p>
                </div>
 
                <div className='col-12 col-lg-3'>
                <div className='bikeedit'>
                    <img src={'https://res.cloudinary.com/dntv0bst8/image/upload/c_pad,w_300,h_300/v1715738377/bike_xjnesh.png'} alt='deliverybike' />
                </div> 
                </div>

                <a href='#' className='btn btn-primary'>Become a Vendor</a>
            </div>
            </div>

            <div className='clientsay'>

            <div className='container-down mt-3'>
               <div className='row'> 
               <h2>What our clients say about us!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
                   in, accumsan non quam. Nam consectetur porttitor rhoncus.</p>
              <div className="col-4">
                <div className="card custom-card h-100">
                  <div className="card-body">
                    <p className='card-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
                   in, accumsan non quam. Nam consectetur porttitor rhoncus</p>
                    <h6 className="card-title">Mat Joe</h6>
                    <p className="card-text">Client</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card h-100">
                  <div className="card-body">
                  <p className='card-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
                   in, accumsan non quam. Nam consectetur porttitor rhoncus</p>
                    <h6 className="card-title">Mat Joe</h6>
                    <p className="card-text">Client</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card h-100">
                  <div className="card-body">
                  <p className='card-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
                   in, accumsan non quam. Nam consectetur porttitor rhoncus</p>
                    <h6 className="card-title">Mat Joe</h6>
                    <p className="card-text">Client</p>
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
  );
    
}


export default Home;
