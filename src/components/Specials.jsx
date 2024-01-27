import React from "react";
import Card from "../shared/Card";
import menu from "../data/menu";
import { Link } from "react-router-dom";

const Specials = () => {
  const specialsMenu = menu.slice(0, 3);

  return (
    <div className="specials">
      <section className="specials__section">
        <h1>This Week's Specials</h1>
        <button className="hero__button"><Link to="/menu">Online Menu</Link></button>
      </section>
      <section className="specials__cards">
        {specialsMenu.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </section>
    </div>
  );
};

export default Specials;
