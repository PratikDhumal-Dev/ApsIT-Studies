import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Notes from "./Notes/Notes";
import PaperSolutions from "./PaperSolutions/PaperSolutions";
import EasySolution from "./EasySolution/EasySolution";
import Sem1 from "./Subjects/Semesters/Sem1/Sem1";
import Sem2 from "./Subjects/Semesters/Sem2/Sem2";
import Sem3 from "./Subjects/Semesters/Sem3/Sem3";
import Sem4 from "./Subjects/Semesters/Sem4/Sem4";
import Sem5 from "./Subjects/Semesters/Sem5/Sem5";
import Sem6 from "./Subjects/Semesters/Sem6/Sem6";
import Sem7 from "./Subjects/Semesters/Sem7/Sem7";
import Sem8 from "./Subjects/Semesters/Sem8/Sem8";
import FE from "./Departments/FE/FE";
import IT from "./Departments/IT/IT";
import MECH from "./Departments/MECH/MECH";
import COMPS from "./Departments/COMPS/COMPS";
import CIVIL from "./Departments/CIVIL/CIVIL";
import EXTC from "./Departments/EXTC/EXTC";
import EM1 from "./Subjects/Semesters/Sem1/EM1";

function App(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/paperSolutions">
            <PaperSolutions />
          </Route>
          <Route path="/easySolutions">
            <EasySolution />
          </Route>
          <Route path="/semesters/sem1">
            <Sem1 />
          </Route>
          <Route path="/semesters/sem2">
            <Sem2 />
          </Route>
          <Route path="/semesters/sem3">
            <Sem3 />
          </Route>
          <Route path="/semesters/sem4">
            <Sem4 />
          </Route>
          <Route path="/semesters/sem5">
            <Sem5 />
          </Route>
          <Route path="/semesters/sem6">
            <Sem6 />
          </Route>
          <Route path="/semesters/sem7">
            <Sem7 />
          </Route>
          <Route path="/semesters/sem8">
            <Sem8 />
          </Route>
          <Route path="/subjects/fe">
            <FE />
          </Route>

          <Route path="/subjects/it">
            <IT />
          </Route>
          <Route path="/subjects/mech">
            <MECH />
          </Route>
          <Route path="/subjects/civil">
            <CIVIL />
          </Route>
          <Route path="/subjects/comps">
            <COMPS />
          </Route>
          <Route path="/subjects/extc">
            <EXTC />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
