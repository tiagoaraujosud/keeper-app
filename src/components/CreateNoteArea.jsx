import React from "react";

function CreateNoteArea() {
    return (
        <div>
            <form>
                <input name="title" placeholder="Title"/>
                <input name="content" type="text" placeholder="Take a note..."/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateNoteArea;