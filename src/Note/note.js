import React from 'react'

function Note(props){
    return (
        <div className="Note">
            <h2>{props.name}</h2>
            <button>Delete Note</button>
            <div className="Note__date-modified">
                Modified on {props.modified}
            </div>
        </div>
    )
}

export default Note