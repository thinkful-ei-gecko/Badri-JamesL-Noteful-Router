import React from 'react';
// import AddFolders from './AddFolders/AddFolders';

export default class SideFolders extends React.Component {
  
  render(){
    const folders = this.props.folders.map((folder, index) => {
      return (
        <nav className="sideBar" key={index}>
          {folder.name}
        </nav>
      )
    })
    return (
      
      <div>
        {folders}
      </div>
    )
  }
}