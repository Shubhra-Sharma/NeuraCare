import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Desc from './landing_page/home/Desc.jsx';
import AboutUs from './landing_page/about/AboutUs.jsx';
import SelfCare from './landing_page/selfcare/SelfCare.jsx';
import Features from './landing_page/features/Features.jsx';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Desc />} />
          <Route path='/Features' element={<Features/>}/>
          <Route path='/SelfCare' element={<SelfCare/>}/>
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;

// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';

// function App() {
//   return (
//     <div className="app">
           
//             <Link to="/">Home</Link>
          
//             <Link to="/about">About Us</Link>
         

//       {/* This is where the matching route will be rendered */}
//       <Outlet />
//     </div>
//   );
// }

// export default App;
