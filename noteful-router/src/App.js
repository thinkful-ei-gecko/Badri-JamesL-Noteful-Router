import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import SideFolders from './SideFolders/SideFolders'
import NoteList from './NoteList/NoteList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideFolders />
        <NoteList />
      </div>
    );
  }
}

export default App;
