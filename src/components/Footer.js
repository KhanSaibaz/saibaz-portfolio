import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Copyright &copy; {currentYear} |  All Rights Reserved | Design By Saibaz Khan.</p>
      </div>
      <div className="footer-right">
        <div className="contact-item">
          <FaEnvelope size={24} className="contact-icon" />
          <a href="mailto:khansaibaz2121@gmail.com"  style={{fontFamily:'sans-serif',fontSize:'18px'}} className="contact-link">khansaibaz2121@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaPhone size={24} className="contact-icon" />
          <a href="tel:+919594477137" className="contact-link"  style={{fontFamily:'sans-serif',fontSize:'18px'}}>+91 95944 77137</a>
        </div>
      </div>
    </footer>
  );
}