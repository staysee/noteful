import React from 'react'
import Note from '../Note/Note'
import './Main.css'

function Main(props){
        return(
            <div className="Main">
                <ul className="Main__list">
                    {props.notes.map( note =>
                        <li key={note.id}>
                            <Note id={note.id} {...note} />
                        </li>
                    )}
                </ul>
            </div>
        )
}

Main.defaultProps = {
    notes: []
}

export default Main