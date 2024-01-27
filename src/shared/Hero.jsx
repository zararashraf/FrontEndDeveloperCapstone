import React from "react";
import hero from "../images/hero.jpg";

const Hero = (props) => {
  const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`;

  return (
    <div className="hero" style={{ backgroundImage }}>
      <div className="hero__overlay">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};

export default Hero;
