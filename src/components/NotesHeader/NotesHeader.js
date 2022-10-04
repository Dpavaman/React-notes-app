import React from "react";
import './NotesHeader.css'

const NotesHeader = ({ setDarkMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="toggle-mode" onClick={() => setDarkMode((prevState) => !prevState)} >Toggle Mode</button>
        </div>
    )
}

export default NotesHeader