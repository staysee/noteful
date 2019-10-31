import React from 'react'
import { NavLink } from 'react-router-dom'
import './FolderList.css'

class FolderList extends React.Component {

    render() {
        const { folders } = this.props;

        const folderList = folders.map( folder => 
            <li className="FolderList__item" key={folder.id}>
                <NavLink to={`/folder/${folder.id}`}>
                    {folder.name}
                </NavLink>
            </li>
        );

        return(
            <div className="folder-list">
                <ul className="FolderList__list">
                    {folderList}
                </ul>
                <button>Add Folder</button>
            </div>
        )
    }
}

export default FolderList