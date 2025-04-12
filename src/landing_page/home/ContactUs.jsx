import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">What are you waiting for? Join NeuroCare!</h2>
      
      <p className="contact-description">
      Whether you're seeking support, exploring new possibilities, or simply curious — NeuroCare is your safe space.  
  Reach out to discover how we champion neurodiverse journeys with empathy, innovation, and real human connection.

      </p>
      
      <Link to="/Features" className="contact-button">Explore Features</Link>
    </div>
  );
};

export default ContactUs;