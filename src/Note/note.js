import React from 'react'

function Note(props){
    return (
        <div className="Note">
            <h2>{props.name}</h2>
            <p>Modified on {props.modified}</p>
            <p>Content: {props.content}</p>
        </div>
    )
}

export default Note