import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import SideFolders from './SideFolders/SideFolders';
import NoteList from './NoteList/NoteList';
import Note from './Note/Note';
import NotefulContext from "./NotefulContext";

class App extends Component {

  static contextType = NotefulContext;

  constructor(props) {
    super(props);

    this.state = {
      folders: [],
      notes: []
    };
  }

  handleDeleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes
    })
  }

  getFolders() {
    fetch(`http://localhost:9090/folders`, {
      method: 'GET',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      this.setState({
        folders: data
      })
    })
    .catch(error => alert(error))
  }

  getNotes() {
    fetch(`http://localhost:9090/notes`, {
      method: 'GET',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      this.setState({
        notes: data
      })
    })
    .catch(error => alert(error))
  }

  componentDidMount() {
    this.getNotes();
    this.getFolders();
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
    };

   return (
    <NotefulContext.Provider value = {contextValue}>
      <div className="App">
        <header className="App-header">
          <Link to='/'>Noteful</Link>
        </header>

        <main>
          <SideFolders folders={contextValue.folders} />
          <Route 
            exact path='/'
            render= {() => {
              return <NoteList 
                noteProp={contextValue.notes}/>}
              }
            />
          <Route 
            path='/folder/:folderId'
            render= {( props ) => {
              
              return <NoteList
                {...props}
                noteProp={contextValue.notes}
                />}
              }
          />
          <Route
            path='/note/:noteId'
            render={(props) => {
              return <Note
              {...props}
              noteProp={contextValue.notes}
              />
            }}
          />
        </main>
      </div>
    </NotefulContext.Provider>
    );
  };
};

export default App;
