import React from 'react'
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import './NotePage.css'

class NotePage extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NotefulContext;

    handleDeleteNote = noteId =>{
        //redirect to "/" after note is deleted
        this.props.history.push("/");
    }

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
                    onDeleteNote={this.handleDeleteNote}
                />
    
                <div className="NotePage__content">
                    {note.content}
                </div>
            </div>
        )
    }
}

export default NotePage

NotePage.propTypes = {
    match: PropTypes.object
}