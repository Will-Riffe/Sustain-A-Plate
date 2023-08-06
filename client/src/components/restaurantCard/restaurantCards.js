import React from "react";
import "./restaurantCards.css";

export default function RestaurantCards({ title, image }) {
  return (
    <div className="restaurant-card" key={title}>
      <img src={image} alt={title} className="restcard-icon" />
      <div className="resticon-name">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
