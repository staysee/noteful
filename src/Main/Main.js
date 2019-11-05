import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import './Main.css'

class Main extends React.Component {
    static contextType = ApiContext

    render(){
        const { notes } = this.context;
        return(
            <div className="Main">
                <ul className="Main__list">
                    {notes.map( note =>
                        <li key={note.id}>
                            <Note id={note.id} {...note} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Main