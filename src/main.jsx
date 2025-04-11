import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Features from './landing_page/home/Features.jsx';
import AboutUs from './landing_page/about/AboutUs.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)