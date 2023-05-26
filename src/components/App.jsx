import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNoteArea from "./CreateNoteArea";
import notes from "../notes";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateNoteArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index} 
            title={note.title} 
            content={note.content}
        />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

