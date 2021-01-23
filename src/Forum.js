import React from "react";
import { Redirect } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Forum.css";
import comingSoon from "./images/comingSoon.png";
import HomePageHeader from "./HomePageHeader";

function Forum() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) return <Redirect to="/login" />;
  return (
    <>
      <HomePageHeader />
      <div className="forum">
        <div className="forum__container">
          <img className="forum__image" src={comingSoon} />
        </div>
      </div>
    </>
  );
}

export default Forum;
