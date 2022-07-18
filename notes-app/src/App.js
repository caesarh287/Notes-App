import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import localforage from "localforage";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    var all = [];
    localforage
      .iterate((value, key, i) => {
        all.push(value);
      })
      .then(() => {
        setNotes([...all, ...notes]);
      });
  };

  const addNote = async (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    try {
      await localforage.setItem(newNote.id, newNote);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNote = async (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes([]);
    try {
      await localforage.removeItem(id);
      setNotes([...newNotes]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
