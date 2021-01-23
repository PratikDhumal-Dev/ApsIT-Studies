import React from "react";
import HomePageHeader from "../HomePageHeader";
import NotesHomePage from "../NotesHomePage";
import Accordion from "react-bootstrap/Accordion";
import NotesList from "./NotesList";
import Books from "./Books/Books";
import { auth } from "../firebase";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Notes(props) {
  const [{ user }, dispatch] = useStateValue();
  if (!user) return <Redirect to="/login" />;
  return (
    <div>
      <HomePageHeader />
      <NotesHomePage />
      <NotesList />
      <Books />
    </div>
  );
}

export default Notes;
