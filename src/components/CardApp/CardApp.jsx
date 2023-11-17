import React from "react";
import "./CardApp.scss";

function CardApp(props) {
  return (
    <div className="cardapp">
      <img className="cardapp__image" src={props.image} alt="icon" />
      <div className="cardapp__label">{props.label}</div>
      <div className="cardapp__description">{props.description}</div>
    </div>
  );
}

export default CardApp;
