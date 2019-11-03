import React from 'react'
import { Link } from 'react-router-dom'
import './Note.css'

function Note(props){

    return (
        <div className="Note">
            <h2 className="Note__title">
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            
            <div className="Note__date">
                Modified on {props.modified}
            </div>

            <button className="Note__delete">
                Delete Note
            </button>
        </div>
    )
}

export default Note