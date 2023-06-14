import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';


function CreateNoteArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
    }

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
    }

    return (
        <div>
            <form className="create-note">
                <input 
                    onChange={handleChange} 
                    name="title" 
                    placeholder="Title" 
                    value={note.title}
                />
                <textarea 
                    onChange={handleChange} 
                    name="content" 
                    type="text" 
                    placeholder="Take a note..." 
                    value={note.content}
                />
                <Fab onClick={submitNote}>
                    <AddCircleOutlineIcon />
                </Fab>
            </form>
        </div>
    )
}

export default CreateNoteArea;