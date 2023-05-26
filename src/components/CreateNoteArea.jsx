import React, { useState } from "react";

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
            <form>
                <input onChange={handleChange} name="title" placeholder="Title"/>
                <textarea onChange={handleChange} name="content" type="text" placeholder="Take a note..."/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateNoteArea;