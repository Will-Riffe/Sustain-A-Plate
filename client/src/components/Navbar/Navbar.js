import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import './Navbar.css';

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

return (
  <div className="navbar" id={expandNavbar ? "open" : "close"}>

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
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
      </div>

  </div>
)
}

export default NavBar;