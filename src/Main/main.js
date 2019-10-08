import React from 'react'
import './main.css'

class Main extends React.Component {
    render() {
        const allNotes = this.props.notes.map(note =>
                <li key={note.id}>
                    {note.name}
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