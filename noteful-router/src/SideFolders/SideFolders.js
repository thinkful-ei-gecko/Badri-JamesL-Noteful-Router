import React from 'react';
import './SideFolders.css';
import { Link } from 'react-router-dom';
import NotefulContext from "../NotefulContext";

export default function SideFolders (props) {
      return (

        <NotefulContext.Consumer>
          {({folders}) => (
            <nav className="sideBar">
              {folders.map(folder => <nav className='sideBarItem'><Link to={`/folder/${folder.id}`}>{folder.name}</Link></nav>)}
            </nav>
        )}
        </NotefulContext.Consumer>
      )
  }