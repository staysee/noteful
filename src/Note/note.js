import React from 'react'

function Note(props){
    return (
        <div className="Note">
            <h2>{props.name}</h2>
            <div className="Note__date-modified">
                Modified on {props.modified}
            </div>
            <p>Content: {props.content}</p>
            <button>Delete Note</button>
        </div>
    )
}

export default Note