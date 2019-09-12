import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NotefulContext from "../NotefulContext";
import './Note.css'

function deleteNoteRequest(noteId, callback) {
  fetch(`http://localhost:9090/notes/${noteId}`, {
    method: "DELETE"
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          throw error;
        });
      }
      return res.json();
    })
    .then(data => {
      callback(noteId);
    })
    .catch(error => {
      console.error(error);
    });
}


export default class Note extends Component {
  static contextType = NotefulContext;
  
  render() {
    
    if(this.props.noteProp.length === 0){
      return 'loading'
    }
    let selectedNote = this.props.noteProp.find((note)=> {
        return this.props.match.params.noteId === note.id
      })
    const date = new Date(selectedNote.modified);
    return (
      <div className='noteItem'>
        <h3><Link to ='/'>{selectedNote.name}</Link></h3>
        <p>Date Modified: {date.toDateString()}</p>
        <p>{selectedNote.content}</p>
        <button
          type="button"
          onClick={() => {
            this.props.history.push('/');
            deleteNoteRequest(selectedNote.id, this.context.deleteNote);     
           }
          }
        >
          Delete note
        </button>
      </div>
    )
  }
}