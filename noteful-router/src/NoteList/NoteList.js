import React, { Component } from "react";
import { withRouter } from "react-router";
import './NoteList.css';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

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

class NoteList extends Component{
  static contextType = NotefulContext;

    render() {
      let { notes } = this.context;
      const { match, location } = this.props;

      notes = location.pathname.length !== 1
        ? notes.filter(note => note.folderId === match.params.folderId)
        : notes;

      const newNotes = notes.map((note, index) => {
         const date = new Date(note.modified);
         return (
             <div className='noteItem' id={index} key={note.id}>
               <h4><Link to={`/note/${note.id}`}>{note.name}</Link></h4>
               <p>Date modified: {date.toDateString()} </p>
               <button type='button' 
                       className='deleteButton'
                       onClick={() => deleteNoteRequest(note.id, this.context.deleteNote)}
                      >
                      Delete
               </button>
             </div>

         )
       })
    return (
      <div className='noteList'>
        {newNotes}
      </div>
    )
}}

export default withRouter(NoteList);
