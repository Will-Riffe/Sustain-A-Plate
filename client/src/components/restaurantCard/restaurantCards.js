import React from "react";
import './restaurantCards.css'

export default function RestaurantCards ({ title, image, link }) {

    return (
        <div className="restaurant-card" key={title}>
            <a href={link}>
                <img
                    src={image}
                    alt={title}
                    className="restcard-icon"
                />    
            </a>
            <div className="resticon-name">
                <h3> {title} </h3>
            </div>
        </div>
    )
}