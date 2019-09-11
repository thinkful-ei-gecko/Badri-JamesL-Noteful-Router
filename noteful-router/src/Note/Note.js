import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Note (props) {
  if(props.noteProp.length === 0){
    return 'loading'
  }
  let selectedNote = props.noteProp.find((note)=> {
      return props.match.params.noteId === note.id
    })
  return (
    <div>
      <Link to ='/'>{selectedNote.name}</Link>
      <p>Date Modified: {selectedNote.modified}</p>
      <p>{selectedNote.content}</p>
    </div>
  )
}