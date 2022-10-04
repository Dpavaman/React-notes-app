import React from "react";
import AddNote from "../AddNote/AddNote";
import Note from "../Note/Note";
import './NotesList.css'


const NotesList = ({notesArray, addNote, deleteNote}) => {
    return (
        <div className="notes-list">
           {
            notesArray.map((note) => {
                return <Note key={note.id} noteData={note}  deleteNote={deleteNote}/>
            })
           }
           <AddNote addNote={addNote} />
        </div>
    )
}

export default NotesList