import React from "react";
import './footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Footer() {
    return (
      <footer>
        <h3><em>Follow us on Social Media</em></h3>
            <div class="socialMedia"> 
                <GitHubIcon />
                <SportsEsportsIcon />
            </div>
        <p> &copy; 2023 Sustain-A-Plate </p>
  
      </footer>
    )
  }
  
  export default Footer