import React from "react";
import HomePageHeader from "./HomePageHeader";
import "./HomePage.css";
import Title from "./Title";
import NotesHomePage from "./NotesHomePage";
import DepartmentHomePage from "./Departments/DepartmentHomePage";
import PreviousPaper from "./PreviousPaper";
import Tips from "./Tips";

import OurTeam from "./OurTeam";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <Title />
      <Tips />
      <DepartmentHomePage />
      <PreviousPaper />
      <NotesHomePage />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default HomePage;
