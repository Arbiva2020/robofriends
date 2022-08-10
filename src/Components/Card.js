import React from "react";
import "./Card.css";

function Card({ id, name, email }) {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${id}`}
        alt="robot"
        className="roboimg"
      ></img>
      <div className="card_div">
        <h4 className="card_h2">{name}</h4>
        <p className="card_p">{email}</p>
      </div>
    </div>
  );
}

export default Card;
