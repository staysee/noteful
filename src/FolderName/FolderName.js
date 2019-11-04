import React from 'react'
import './FolderName.css'

function FolderName(props){
    return (
        <div className="FolderName">
            <button
                className="goBack-button"
                onClick={() => props.history.goBack()}
            >
                Back
            </button>

            {props.folder && (
                <h3 className="FolderName__name">
                    {props.folder.name}
                </h3>
            )}

        </div>
    )
}

FolderName.defaultProps = {
    history: {
        goBack: () => {}
    }
}

export default FolderName