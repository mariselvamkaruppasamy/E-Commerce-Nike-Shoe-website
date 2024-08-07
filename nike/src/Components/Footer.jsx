import React from 'react'
import '../Components/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <div>
              <h4>Customer Service</h4>
              <ul>
                <li><a href="/help">Help</a></li>
                <li><a href="/shipping">Shipping</a></li>
                <li><a href="/returns">Returns</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4>About Nike</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/news">Investors</a></li>
                <li><a href="/news">News</a></li>
              </ul>
            </div>
            <div>
              <h4>Follow Us</h4>
              <ul className="social-media">
                <li><h5 className='me-icons'><FaFacebookF /></h5></li>
                <li><h5 className='me-icons'><FaTwitter /></h5></li>
                <li><h5 className='me-icons'><FaInstagram /></h5></li>
                <li><h5 className='me-icons'><FaYoutube /></h5></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Nike, Inc. All rights reserved, Terms of Sale, Terms of Use, 
            Nike Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  )
}

