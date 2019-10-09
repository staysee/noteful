import React from 'react'
import './main.css'

import Note from '../Note/note'

class Main extends React.Component {
    render() {
        const allNotes = this.props.notes.map(note =>
                <li key={note.id}>
                    <Note 
                        id={note.id}
                        {...note}
                    />
                </li>

            );
        return(
            <div className="Main">
                <ul>
                    {allNotes}
                </ul>

                <button>Add New Note</button>
            </div>
        )
    }
}

export default Main