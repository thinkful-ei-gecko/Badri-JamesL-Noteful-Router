import React from 'react';


export default function Note (props) {
  if(props.noteProp.length === 0){
    return 'loading'
  }
  let selectedNote = props.noteProp.find((note)=> {
      return props.match.params.noteId === note.id
    })
  return (
    <div>
      <h3>{selectedNote.name}</h3>
      <p>Date Modified: {selectedNote.modified}</p>
      <p>{selectedNote.content}</p>
    </div>
  )
}