import React from "react";
import culinaryImage from "../images/loaf.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1>Welcome to Little Lemon</h1>
          <h2>Discover the Flavors of our Urban Oasis</h2>
          <p>
            Embark on a culinary journey at Little Lemon, a passionately crafted
            Mediterranean eatery nestled on Anarkali Food Street in the vibrant
            heart of Lahore, Pakistan. Immerse yourself in the essence of
            tradition with a modern culinary twist.
          </p>
          <button className="hero__button"><Link to="/booking">Book a Culinary Adventure</Link></button>
        </div>
        <div className="hero__image">
          <img src={culinaryImage} alt="Culinary Adventure" />
        </div>
      </div>
    </div>
  );
};

export default Hero;