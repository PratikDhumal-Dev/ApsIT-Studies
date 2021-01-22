import React from "react";
import HomePageHeader from "../HomePageHeader";
import PreviousPaper from "../PreviousPaper";
import PaperSolutionList from "./PaperSolutionList";

function PaperSolutions() {
  return (
    <div>
      <HomePageHeader />
      <PreviousPaper />
      <PaperSolutionList />
    </div>
  );
}

export default PaperSolutions;
