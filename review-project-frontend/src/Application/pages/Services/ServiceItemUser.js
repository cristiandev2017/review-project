import React from "react";
import "./static/style.css";
import barb from "./static/barb.jpg";
function ServiceItemUser({ service }) {
  const { _id, name, description, value } = service;
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={barb} />
        </div>
        <div className="card_content text-center">
          <h2 className="card_title">{name}</h2>
          <p className="card_text">{description}</p>
          <button className="btn btn-primary btn-block">
            {value}$
          </button>
        </div>
      </div>
    </li>
  );
}

export default ServiceItemUser;
