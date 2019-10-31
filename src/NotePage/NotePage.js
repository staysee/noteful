import React from 'react'
import Note from '../Note/Note'
import './NotePage.css'

function NotePage(props){
    return (
        <div className="NotePage">
            <Note notes={props.notes}/>

            <div className="NotePage__content">
                {props.content}
            </div>
        </div>
    )
}

export default NotePage