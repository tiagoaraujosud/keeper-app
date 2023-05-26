import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNoteArea from "./CreateNoteArea";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <CreateNoteArea />
      {notes.map(note => (
        <Note 
          key={note.key} 
          title={note.title} 
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

