import React from 'react';
import './NoteList.css';
//import { format } from 'date-fns'
// import Note from './Note/Note';
// import AddNote from './AddNote/AddNote';


export default function NoteList (props){

  let filteredNotes = props.noteProp;
  
  if (props.match) {
    filteredNotes = props.noteProp.filter((note) => {
      return props.match.params.folderId === note.folderId
    })
  }


 const notes = filteredNotes.map((note, index) => {
    //const date = format(note.modified, 'DD MM YYYY')
    return (
      <div className='noteItem' id={index} key={note.id}>
        <h3>{note.name}</h3>
        <p>Date modified: {note.modified} </p>
      </div>
    )
  })

    return (
      <div className='noteList'>
        {notes}
      </div>
    )
}
