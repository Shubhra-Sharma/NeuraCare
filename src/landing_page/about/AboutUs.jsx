import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="header-section">
        <h1>We're empowering neurodiverse individuals with AI assistance.</h1>
        <h2>Making personalized support accessible for all.</h2>
      </div>

      <div className="divider"></div>

      <div className="content-section">
        <div className="content-column">
          <p>
            Welcome to NeuraCare, where we revolutionize support for neurodiverse 
            individuals through AI. Founded to democratize access to resources, 
            we understand the unique challenges faced by people with ADHD, autism, 
            dysphoria, Tourette's, and other neurodivergent conditions.
          </p>

          <p>
            Our platform emerged from a simple idea: everyone deserves access to 
            personalized support tools. By combining AI technology with user-friendly 
            design, we've created a solution that empowers neurodiverse individuals 
            to better understand and manage their conditions.
          </p>
        </div>

        <div className="content-column">
        <p>
            What sets us apart is our commitment to accessibility and personalization. 
            Our AI-powered systems adapt to individual needs, providing tailored 
            resources that respect the uniqueness of each person's neurodivergent journey.
          </p>
          <p>
            At NeuraCare, we believe in the power of technology to create inclusive 
            spaces where everyone can thrive on their own terms. Our mission is to 
            provide tools that adapt to you, not the other way around.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;