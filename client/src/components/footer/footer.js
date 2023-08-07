import React from "react";
import './footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';

function Footer() {
  return (
    <footer className="footer">
      <h3><em>Follow us on Social Media</em></h3>
      <div className="socialMedia"> 
        <GitHubIcon />
        <LinkedInIcon />
        <TwitterIcon />
        <FacebookIcon />
        <RedditIcon />
        <SportsEsportsIcon />
      </div>
      <p>&copy; 2023 Sustain-A-Plate</p>
    </footer>
  );
}

export default Footer;
