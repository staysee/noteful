import React from 'react'
import NotefulContext from '../NotefulContext'
import ValidationError from '../ValidationError/ValidationError'
import PropTypes from 'prop-types'
import config from '../config'
import { format } from 'date-fns'
import './AddNote.css'

class AddNote extends React.Component {
    static contextType = NotefulContext;

    constructor(props){
        super(props)
        this.state = {
            noteName: {
                name: '',
                touched: false
            },
            noteContent: {
                content: '',
                touched: false
            },
            noteFolder: {
                folderId: '',
                touched: false
            }
        }
    }

    setNoteName = noteName => {
        this.setState({
            noteName: {
                name: noteName,
                touched: true
            },
        })
    }

    setNoteContent = noteContent => {
        this.setState({
            noteContent: {
                content: noteContent,
                touched: true
            }
        })
    }

    setNoteFolder = noteFolderId => {
        this.setState({
            noteFolder: {
                folderId: noteFolderId,
                touched: true
            }
        })
    }

    validateName(fieldValue){
        const name = this.state.noteName.name.trim()
        if (name.length === 0){
            return 'Name is required'
        } else if (name.length < 2){
            return 'Name must be at least 2 characters long'
        }
    }

    validateContent(fieldValue){
        const content = this.state.noteContent.content.trim()
        if (content.length === 0){
            return 'You must enter some content.'
        } else if (content.length < 5){
            return 'Content must be over 5 characters long.'
        }
    }

    validateFolder(fieldValue){
        const folderId = this.state.noteFolder.folderId.trim()
        if (folderId.length === 0){
            return 'You must select a folder.'
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        const { noteName, noteContent, noteFolder } = this.state

        const newNote = {
            name: noteName.name,
            content: noteContent.content,
            folderId: noteFolder.folderId,
            modified: new Date()
        }

        const url = `${config.API_ENDPOINT}/notes`
        const options = {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(url, options)
            .then(res => {
                if (!res.ok)
                    return res.json().then( e => Promise.reject(e))
                return res.json()
            })
            .then( note => {
                this.context.addNote(note)
                this.props.history.push(`/folders/${note.folderId}`)
            })
            .catch( err => {
                this.setState({
                    error: err.message
                })
            })
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    handleChange = event => {
        const { target: { name, value } } = event
        this.setState({ [name]: value, event: event })
    }

    render() {
        const { folders = [] } = this.context;
        const { noteName, noteContent, noteFolder } = this.state;
        const nameError = this.validateName();
        const contentError = this.validateContent();
        const folderError = this.validateFolder();

        return(
            <div className="AddNote">
                <h2>Add a New Note</h2>
                <form className="AddNote__form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="note-name">Name</label>
                        <input 
                            type="text"
                            id="note-name" 
                            name="note-name" 
                            autoComplete="off" 
                            onChange={e=>this.setNoteName(e.target.value)} />
                        {noteName.touched && (
                            <ValidationError message={nameError} />
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="note-content">Content</label>
                        <input 
                            type="text" 
                            id="note-content" 
                            name="note-content"
                            autoComplete="off" 
                            onChange={e=>this.setNoteContent(e.target.value)} />
                        {noteContent.touched && (
                            <ValidationError message={contentError} />
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="note-folder">Folder</label>
                        <select 
                            id="note-folder"
                            onChange={e=>this.setNoteFolder(e.target.value)}>
                            <option value={null}>...</option>
                            {folders.map( folder => 
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>)}
                        </select>
                        {noteFolder.touched && (
                            <ValidationError message={folderError} />
                        )}
                    </div>
                    
                    <button 
                        className="AddNote__button-cancel"
                        onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="AddNote__button-save"
                        disabled={
                            this.validateName() ||
                            this.validateContent() ||
                            this.validateFolder()
                        }>
                        Add Note
                    </button>
                </form>
            </div>
        )
    }
}

export default AddNote

AddNote.propTypes = {
    history: PropTypes.object
}