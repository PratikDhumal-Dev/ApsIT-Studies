import React from "react";
import DepartmentList from "./DepartmentList";
import "./DepartmentHomePage.css";

function DepartmentHomePage() {
  return (
    <div className="DepartmentHomePage">
      <div className="DepartmentHomePage__text">
        <div className="DepartmentHomePage__textPrimary">
          <h1>Departments List</h1>
        </div>
        <div className="DepartmentHomePage__textSecondary">
          <h4>One Stop Solution for Every Department</h4>
        </div>
      </div>
      <DepartmentList />
    </div>
  );
}

export default DepartmentHomePage;
