import React, { useEffect, useState } from "react"
import NotesList from "./components/NotesList/NotesList"
import NotesHeader from './components/NotesHeader/NotesHeader'
import { nanoid } from "nanoid"
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar"

const App = () => {

  const [notesArray, setNotesArray] = useState([])

  const [searchText, setSearchText] = useState("")
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('REACT_NOTES_APP_DATA'))
    if(savedNotes && savedNotes.length){
      setNotesArray(savedNotes)
    }
  }, [])

  
  useEffect(()=>{
    localStorage.setItem('REACT_NOTES_APP_DATA', JSON.stringify(notesArray))
  }, [notesArray])
  
  const addNote = (text) =>{
    const date = new Date()
    setNotesArray([...notesArray, {id : nanoid(), text, date : date.toLocaleDateString()}])
  }
  
  const  deleteNote = (id) => {
    setNotesArray(notesArray.filter((note) => note.id !== id));
  }


  return (
    <div className={darkMode ? 'dark-mode' : ""}>
      <div className="container">
        <NotesHeader setDarkMode={setDarkMode} />
        <SearchBar setSearchText={setSearchText} />
        <NotesList addNote={addNote} deleteNote={deleteNote} notesArray={notesArray.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} />
      </div>
    </div>
  )
}

export default App
