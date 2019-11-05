import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import './NotePage.css'

class NotePage extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    render() {
        const { notes } = this.context;
        const { noteId } = this.props.match.params;
        const note = notes.find( note => note.id === noteId) || { content: `` };

        return (
            <div className="NotePage">
                <Note 
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                />
    
                <div className="NotePage__content">
                    {note.content}
                </div>
            </div>
        )
    }
}

export default NotePage