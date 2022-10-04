import React, { useState } from "react";
import './AddNote.css'

const AddNote = ({addNote}) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }

    const handleSave = (event) => {
        event.preventDefault();
        if(noteText.trim()){
            addNote(noteText)
        }
        setNoteText("")
    }

    return (
        <div className="note new-note">
            <textarea rows='8' cols="10" value={noteText} placeholder="Type to add a note..." onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote