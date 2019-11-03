import React from 'react'
import Note from '../Note/Note'
import './NotePage.css'

function NotePage(props){
    return (
        <div className="NotePage">
            <Note 
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />

            <div className="NotePage__content">
                {props.note.content}
            </div>
        </div>
    )
}

NotePage.defaultProps = {
    note: {
        content: ''
    }
}

export default NotePage