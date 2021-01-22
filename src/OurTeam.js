import React from "react";
import OurTeamCard from "./OurTeamCard";
import "./OurTeam.css";
function OurTeam() {
  return (
    <div className="ourTeam">
      <div className="ourTeam__text">
        <h1 className="ourTeam__textPrimary">Our Team</h1>
      </div>
      <OurTeamCard />
    </div>
  );
}

export default OurTeam;
