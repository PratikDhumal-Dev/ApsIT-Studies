import React from "react";
import HomePageHeader from "../HomePageHeader";
import Tips from "../Tips";
import EasySolutionList from "./EasySolutionList";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function EasySolution() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) return <Redirect to="/login" />;
  return (
    <div>
      <HomePageHeader />
      <Tips />
      <EasySolutionList />
    </div>
  );
}

export default EasySolution;
