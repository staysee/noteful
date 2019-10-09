import React from 'react'
import STORE from '../dummy-store'

function Note(props){
    const note = STORE.notes.find(n =>
        n.id === props.match.params.noteId
        )
    return (
        <div className="Note">
            <h2>{note.name}</h2>
            <div className="Note__date-modified">
                Modified on {note.modified}
            </div>
            {/* <p>Content: {props.content}</p> */}
            {/* {console.log(props)} */}
            <button>Delete Note</button>
        </div>
    )
}

export default Note