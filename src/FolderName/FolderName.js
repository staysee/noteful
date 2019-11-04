import React from 'react'
import './FolderName.css'

function FolderName(props){
    return (
        <div className="FolderName">

            {props.folder && (
                <h3 className="FolderName__name">
                    {props.folder.name}
                </h3>
            )}

        </div>
    )
}

export default FolderName