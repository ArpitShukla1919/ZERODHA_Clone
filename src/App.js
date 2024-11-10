import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing';
import Product from './components/Product';
import SignUp from './components/Signup';
import Support from './components/Support';
import Home from './components/Home';
import './App.css';

const App = () => {
  const location = useLocation();
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className={`${location.pathname !== '/Support' ? 'container mx-auto px-4 py-8' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
