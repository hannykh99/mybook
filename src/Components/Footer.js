import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Menubar.css'; // Import the CSS file for Menubar
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Footer.css';

function Footer() {
  return (

      <div className='container-fluid'>
        <div className='footer'>
          <div className='row'>
            <div className='col-md-4 ft-1'>
            <img src={'../Images/rice.png'} alt="Logo" fluid/>
     
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <div className='footer-icons'>
                <ul>
              <li><a href='#'> <i className="fa fa-facebook"></i></a></li> 
              <li><a href='#'> <i className="fa fa-instagram"></i></a></li> 
              <li><a href='#'> <i className="fa fa-telegram"></i></a></li> 
              <li><a href='#'> <i className="fa fa-tiktok"></i></a></li> 
                </ul>
              </div>
            </div>

            <div className='col-md-4 ft-2'>
    <h3>Our service</h3>
<lu className='list-unstyle'>
    <li><a href='#'>Shopping Now</a></li>
    <li><a href='#'>New Arrival</a></li>
    <li><a href='#'>Book collection</a></li>
    <li><a href='#'>Best Seller</a></li>
</lu>
</div>

<div className='col-md-4 ft-2'>
    <h3>Our service</h3>
    <lu className='list-unstyle'>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Our Contact</a></li>
        <li><a href='#'>Policy Private</a></li>
        <li><a href='#'>FQA</a></li>
    </lu>
</div>
 </div>
 </div>
 
          <div className='lastfooter'>
            <p className='text-muted'>Copyright © 2023​​ All Rights Reserved by Company Name </p>
          </div>

        </div>
    

  );
}

export default Footer;