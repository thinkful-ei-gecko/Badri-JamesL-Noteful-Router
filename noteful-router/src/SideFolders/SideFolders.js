import React from 'react';
import './SideFolders.css';
import { Route, Link } from 'react-router-dom';
// import AddFolders from './AddFolders/AddFolders';

export default class SideFolders extends React.Component {
  
  render(){
    const folders = this.props.folders.map((folder, index) => {
      return (
        <nav className="sideBarItem" key={index}>
          <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
        </nav>
      )
    })
    return (
      
      <div className='sideBar'>
        {folders}
      </div>
    )
  }
}