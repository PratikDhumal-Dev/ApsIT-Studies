import React from "react";
import HomePageHeader from "../HomePageHeader";
import PreviousPaper from "../PreviousPaper";
import PaperSolutionList from "./PaperSolutionList";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function PaperSolutions() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) return <Redirect to="/login" />;
  return (
    <div>
      <HomePageHeader />
      <PreviousPaper />
      <PaperSolutionList />
    </div>
  );
}

export default PaperSolutions;
