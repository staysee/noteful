import React from 'react'
import { Link } from 'react-router-dom'
import './Note.css'

function Note(props){

    return (
        <div className="Note">
            <Link to={`/note/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>

            <div className="Note__date-modified">
                Modified on {props.modified}
            </div>

            <button>Delete Note</button>
        </div>
    )
}

export default Note