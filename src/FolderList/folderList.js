import React from 'react'
import { Link } from 'react-router-dom'
import './folderList.css'

class FolderList extends React.Component {

    render() {
        const { folders } = this.props;
        const folderList = folders.map( folder => 
            <li key={folder.id}>
                <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                </Link>
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