import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <img src={logo} alt="Little Lemon Logo" className="footer__logo" />
        </div>
        <div className="footer__column">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/order">Order</Link></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Contact</h3>
          <p>2395 Anarkali Street, Lahore, Pakistan</p>
          <p>(123)-456-7890</p>
          <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
        </div>
        <div className="footer__column">
          <h3>Connect</h3>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <p>Join us!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
