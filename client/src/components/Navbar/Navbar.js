import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import './Navbar.css';

function NavBar() {
    
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    {/* Here useEffect collapses accordian as user navigates pages*/}
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
    <div className="navbar">

        {/* Centered h3 element */}
        <div className="centered-content">
            <h3>Sustain-A-Plate</h3>
        </div>
        
        {/* responsive accordian */}
        <div className="toggleButton">
            <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                <ReorderIcon />
            </button>
        </div>


        {/* navbar links */}
        <div className={`links ${expandNavbar ? "expanded" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </div>


    </div>
    )
}

export default NavBar