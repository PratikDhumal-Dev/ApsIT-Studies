import React from "react";
import HomePageHeader from "./HomePageHeader";
import { Redirect } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Dashboard() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) return <Redirect to="/login" />;
  return (
    <div>
      <HomePageHeader />
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
