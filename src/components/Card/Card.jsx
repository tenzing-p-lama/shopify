import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div>
        <div className="card__label">{props.label}</div>
        <div className="card__description">{props.description}</div>
      </div>

      <button className="card__button">View</button>
    </div>
  );
}

export default Card;
