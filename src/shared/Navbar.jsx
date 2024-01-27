import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/order">Order</Link>
      </div>
    </nav>
  );
};

export default Navbar;
