import React from 'react'
import './FolderName.css'

function FolderName(props){
    return (
        <div className="FolderName">
            <h3>
                {props.folder.name}
            </h3>
        </div>
    )
}

export default FolderName