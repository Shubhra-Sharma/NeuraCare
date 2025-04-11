import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">What are you waiting for? Join NeuraCare!</h2>
      
      <p className="contact-description">
      Whether you're seeking support, exploring new possibilities, or simply curious — NeuraCare is your safe space.  
  Reach out to discover how we champion neurodiverse journeys with empathy, innovation, and real human connection.

      </p>
      
      <a href="#contact-form" className="contact-button">
        Sign Up
      </a>
    </div>
  );
};

export default ContactUs;