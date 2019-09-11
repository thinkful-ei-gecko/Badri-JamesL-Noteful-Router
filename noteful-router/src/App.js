import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import SideFolders from './SideFolders/SideFolders';
import NoteList from './NoteList/NoteList';
import Note from './Note/Note';
import dummyStore from './dummy-store';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount () {
    this.setState({
      notes: dummyStore.notes,
      folders: dummyStore.folders
    })
  }

  render() {
    //<NoteList notes={this.state.notes} />
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>Noteful</Link>
        </header>

        <main>
          <SideFolders folders={this.state.folders} />
          <Route 
            exact path='/'
            render= {() => {
              return <NoteList 
                noteProp={this.state.notes}/>}
              }
            />
          <Route 
            path='/folder/:folderId'
            render= {( props ) => {
              
              return <NoteList
                {...props}
                noteProp={this.state.notes}
                />}
              }
          />
          <Route
            path='/note/:noteId'
            render={(props) => {
              return <Note
              {...props}
              noteProp={this.state.notes}
              />
            }}
          />
        </main>
      </div>
    );
  };
};

export default App;
