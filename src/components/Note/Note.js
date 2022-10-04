import React from "react"
import {MdDeleteForever} from 'react-icons/md'
import './Note.css'

const Note = ({noteData, deleteNote}) => {

    const handleDeleteNote = () => {
        deleteNote(noteData.id)
    }

    return(
        <div className="note">
            <span>{noteData.text}</span>
            <div className="note-footer" >
                <small>{noteData.date}</small>
                <MdDeleteForever onClick={handleDeleteNote} className="delete-icon" size="1.3em"/>
            </div>
        </div>
    )
}


export default Note