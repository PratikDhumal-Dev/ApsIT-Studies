import React from "react";
import HomePageHeader from "../HomePageHeader";
import NotesHomePage from "../NotesHomePage";
import Accordion from "react-bootstrap/Accordion";
import NotesList from "./NotesList";
import Books from "./Books/Books";

function Notes() {
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
