import React from 'react'
import './App.css';
import { useState } from 'react';
import MainPage from './Pages/MainPage';
import Nav from './Components/Nav';

import QR_Code from '../src/images/qr-code.png';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";

function App() {

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <div>
      <Nav toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
      <MainPage />

      <div className="footer-main-container">

        <div className="footer-content-title">
          <h1>Follow Us</h1>
          <div className="social-media-links-container">
            <CiFacebook className='social-media-icons' />
            <CiInstagram className='social-media-icons' />
            <CiTwitter className='social-media-icons' />
            <PiTiktokLogoLight className='social-media-icons' />
          </div>
        </div>

        <div className="footer-content-title">
          <h1>Payment</h1>
          <ul>
            <li>G-Cash</li>
            <li>7/11</li>
            <li>BPI</li>
          </ul>
        </div>

        <div className="footer-content-title">
          <h1>Customer Services</h1>
          <ul>
            <li>Help Center</li>
            <li>ArtShop Cares</li>
            <li>Payment Methods</li>
            <li>ArtShop Coins</li>
            <li>Order Tracking</li>
            <li>Free Shipping</li>
            <li>Return & Refund</li>
            <li>ArtShop Guarantee</li>
            <li>Overseas Product</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-content-title">
          <h1>About ArtShop</h1>
          <ul>
            <li>About Us</li>
            <li>ArtShop Blog</li>
            <li>ArtShop Carrers</li>
            <li>ArtShop Policies</li>
            <li>Private Policy</li>
            <li>ArtShop Mall</li>
            <li>Seller Centre</li>
            <li>Flash Deals</li>
            <li>Media Contact</li>
          </ul>
        </div>

        <div className="footer-content-title">
          <h1>Download App</h1>
          <img className='qr-code-image' src={QR_Code} alt="" />
        </div>

      </div>

    </div>
  )
}

export default App
