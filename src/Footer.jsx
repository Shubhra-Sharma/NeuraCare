import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h2 className="logo">
            <span className="logo-highlight">Neura</span>Care
          </h2>
          <p>
          At NeuraCare, we empower neurodiverse individuals by providing personalized tools and resources for mental wellness, cognitive support, and community connection. Our platform is designed to foster understanding, reduce overwhelm, and promote holistic care tailored to every unique mind. Whether you're seeking support, structure, or simply a safe space, NeuraCare is here to walk with you—every step of the way.          </p>
          <div className="footer-icons">
            <a href="mailto:info@neuracare.com"><FaEnvelope /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
      <li><Link to="/SelfCare">Self Care</Link></li>
      <li><Link to="/Features">Features</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Address</h3>
          <p>Indira Gandhi Delhi Technical University for Women, New Delhi, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        ©2025 NeuraCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
