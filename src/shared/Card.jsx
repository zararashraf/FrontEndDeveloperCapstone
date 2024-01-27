import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <article className="card">
      <img src={props.image} alt="Food"></img>
      <section className="card__content">
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <Link className="order__button" to="/order">
          Order for Delivery
        </Link>
      </section>
    </article>
  );
};

export default Card;
