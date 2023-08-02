import React from "react";
import './profileCards.css'

export default function ProfileCards ({ title, image, link }) {

    return (
        <div className="profile-card" key={title}>
            <a href={link}>
                <img
                    src={image}
                    alt={title}
                    className="card-icon"
                />    
            </a>
            <div className="icon-name">
                <h3> {title} </h3>
            </div>
        </div>
    )
}