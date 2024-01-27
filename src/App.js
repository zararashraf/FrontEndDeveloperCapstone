import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Footer from './shared/Footer';
import ImageViewer from './pages/Menu';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ImageViewer />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
