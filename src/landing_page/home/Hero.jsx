import React from "react";
import "./Hero.css";
import heroImage from "./images/3.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <div className="hero-line animate-line1">
          Empowering Neurodiverse Individuals,
        </div>
        <div className="hero-line animate-line2">
          beyond the clinic, into homes.
        </div>
      </div>
    </div>
  );
};

export default Hero;