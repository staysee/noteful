import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NotefulContext from '../NotefulContext'
import './FolderList.css'

class FolderList extends React.Component {
    static contextType = NotefulContext

    render() {
        const { folders = [] } = this.context

        const folderList = folders.map( folder => 
            <li key={folder.id}>
                <NavLink className="FolderList__folder" to={`/folders/${folder.id}`}>
                    {folder.name}
                </NavLink>
            </li>
        );

        return(
            <div className="FolderList">
                <ul className="FolderList__list">
                    {folderList}
                </ul>
                
                <div className="Add__buttons">
                    <NavLink 
                        className="Add__folder-button"
                        to="/add-folder">
                            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                            Folder
                    </NavLink>
                    <NavLink 
                        className="Add__note-button"
                        to="/add-note">
                            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                            Note
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default FolderList