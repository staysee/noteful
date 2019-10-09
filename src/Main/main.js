import React from 'react'
import { Link } from 'react-router-dom'
import STORE from '../dummy-store'
import './main.css'

import Note from '../Note/note'

class Main extends React.Component {
    render() {
        const allNotes = STORE.notes.map(note =>
                <li className="Main__item" key={note.id}>
                    <Link to={`/note/${note.id}`}>
                        <Note id={note.id} {...note}/>
                    </Link>
                </li>

            );
        return(
            <div className="Main">
                <ul className="Main__list">
                    {allNotes}
                </ul>

                <button>Add New Note</button>
            </div>
        )
    }
}

export default Main