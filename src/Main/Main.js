import React from 'react'
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import './Main.css'

class Main extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext

    render(){
        const { notes=[] } = this.context;
        const { folderId } = this.props.match.params;
        let notesInFolder = [];
            if (!folderId) {
                notesInFolder = notes
            } else {
                notesInFolder = notes.filter (note => note.folderId === folderId)
            }

        return(
            <div className="Main">
                <ul className="Main__list">
                    {notesInFolder.map( note =>
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