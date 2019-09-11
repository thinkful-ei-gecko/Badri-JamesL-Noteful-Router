import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import SideFolders from './SideFolders/SideFolders';
import NoteList from './NoteList/NoteList';
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
    
    return (
      <div className="App">
        <Header />
        <SideFolders folders={this.state.folders} />
        <NoteList notes={this.state.notes} />
      </div>
    );
  };
};

export default App;
