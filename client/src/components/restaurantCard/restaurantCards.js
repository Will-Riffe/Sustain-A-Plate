import React from "react";
import './restaurantCards.css';
import { Link } from "react-router-dom";

export default function RestaurantCards ({ title, image, link }) {

    return (
        <div className="restaurant-card" key={title}>
            < Link to = {link}>
                <img
                    src={image}
                    alt={title}
                    className="restcard-icon"
                />    
            </Link>
            <div className="resticon-name">
                <h3> {title} </h3>
            </div>
        </div>
    )
}