import React from "react";
import './profileCards.css';
import { Link } from "react-router-dom";

export default function ProfileCards ({ title, image, link }) {

    return (
        <div className="profile-card" key={title}>
            < Link to={ link } >
                <img
                    src={image}
                    alt={title}
                    className="card-icon"
                />    
                </Link>
            <div className="icon-name">
                <h3> {title} </h3>
            </div>
        </div>
    )
}