// Features.jsx
import React from 'react';
import './Features.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img from './features.jpg';
import prod from './productivity.jpg';
import workout from './workout.jpg';

function Features() {
  return (
    <div className="features-container">
      {/* Mood Journal - Image on right (original layout) */}
      <div className="features-hero">
        <div className="features-hero-content">
          <h1 className='title'>Mood Journal App</h1>
          <p>
          The Mood Journal enables users to document their emotions, thoughts, and daily reflections in a structured and supportive environment. This feature promotes self-awareness and emotional clarity through consistent journaling. Integrated with mood-based analysis, the system also provides personalized music recommendations aligned with the user's emotional state. Whether you're seeking calm, motivation, or emotional release, the Mood Journal offers a holistic approach to mood regulation and self-care.
          </p>
          <Link to="https://neurosenseapp-production.up.railway.app/" className="feature-cta-button">
          Get Started <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="features-hero-image">
          <img src={img} alt="Person using NeuraCare app" />
        </div>
      </div>
      
      {/* AI Productivity - Special layout with proper styling */}
      <div className="features-hero productivity-section">
        <div className="features-hero-image">
          <img src={prod} alt="AI Productivity workspace" />
        </div>
        <div className="features-hero-content">
          <h1 className='title'>AI Productivity Assistant</h1>
          <p>
          This AI Productivity Assistant is built to help users stay organized, focused, and in control of their time. With an intuitive interface, users can effortlessly add tasks with due dates, estimated hours, and categories like Study, Work, or Self-Care. The assistant then organizes these tasks into daily views, making it easy to track what's pending and what's been completed — so every little achievement gets the recognition it deserves.
          </p>
          <Link to="https://ai-appuctivity-assistant-m6qrlkbfskjrpe7emaxuou.streamlit.app/" className="feature-cta-button">
          Get Started <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      
      {/* Workout Generator - Image on right (original layout) */}
      <div className="features-hero">
        <div className="features-hero-content">
          <h1 className='title'>Workout Generator</h1>
          <p>
          The Workout Generator is a user-friendly tool designed to create personalized exercise routines based on your available time and chosen muscle group. With a clear layout and minimal distractions, it ensures a low cognitive load, making it easier for users to stay focused and engaged. After selecting a target area and time duration, the tool generates a structured workout plan that includes exercise names, recommended sets and repetitions, and the estimated time required. Video demonstrations are embedded for optional visual support, catering to users who prefer step-by-step guidance.
          </p>
          <Link to="https://workouts-3nob3u6hxissvtrxwccobr.streamlit.app/" className="feature-cta-button">
          Get Started <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="features-hero-image">
          <img src={workout} alt="Person exercising" />
        </div>
      </div>
    </div>
  );
}

export default Features;