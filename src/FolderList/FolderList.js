import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ApiContext from '../ApiContext'
import './FolderList.css'

class FolderList extends React.Component {
    static contextType = ApiContext;

    render() {
        const { folders } = this.context;

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
                
                <div className="Add__buttons">
                    <NavLink 
                        className="AddFolder"
                        to="/add-folder">
                            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                            Folder
                    </NavLink>
                    <NavLink 
                        className="AddNote"
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