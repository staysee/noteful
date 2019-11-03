import React from 'react'
import { NavLink } from 'react-router-dom'
import './FolderList.css'

class FolderList extends React.Component {

    render() {
        const { folders } = this.props;

        const folderList = folders.map( folder => 
            <li key={folder.id}>
                <NavLink className="FolderList__folder" to={`/folder/${folder.id}`}>
                    {folder.name}
                </NavLink>
            </li>
        );

        return(
            <div className="FolderList">
                <ul className="FolderList__list">
                    {folderList}
                </ul>
                <button>Add Folder</button>
            </div>
        )
    }
}

FolderList.defaultProps = {
    folders: []
}

export default FolderList