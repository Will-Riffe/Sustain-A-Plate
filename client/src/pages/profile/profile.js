import React, { useState } from "react";
// import transHistory from '../../components/transactions';
import PROFILEPICS from "../../assets/profile-templates/profilepics";
import ProfileCards from "../../components/profileCards/profileCards";
import "./profile.css";
import AuthService from "../../utils/auth";

export default function Profile() {
  if (AuthService.loggedIn()) {
    window.location.replace("/login");
    return;
  } else if (!AuthService.loggedIn()) {
    const [profile] = useState([
      {
        title: "Browse Stores",
        image: PROFILEPICS.Browse,
        link: "/food",
      },
      {
        title: "Transaction History",
        image: PROFILEPICS.PreviousTransactions,
        link: "/list",
      },
    ]);
    return (
      <section>
        <div className="lead-text">
          <p className="instructions">
            Full site navigation is open above and below!
          </p>
        </div>
        <div></div>
        <div className="profileCard-sections">
          {profile.map((profilecard, index) => (
            <ProfileCards key={index} {...profilecard} />
          ))}
        </div>
        <style jsx>{`
          img {
            width: 15vw;
            height: auto;
            margin-top: 5vh;
          }
        `}</style>
      </section>
    );
  }
}
