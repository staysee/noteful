import React from 'react'
import NotefulContext from '../NotefulContext'
import config from '../config'
import './AddNote.css'

class AddNote extends React.Component {
    static contextType = NotefulContext;

    handleSubmit = event => {
        event.preventDefault();

        const newNote = {
            name: event.target['note-name'].value,
            content: event.target['note-content'].value,
            folderId: event.target['note-folder'].value,
            modified: new Date()
        }

        const url = `${config.API_ENDPOINT}/notes`;
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
                console.log(note);
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
        const { folders } = this.context;

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
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note-content">Content</label>
                        <input 
                            type="text" 
                            id="note-content" 
                            name="note-content" 
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note-folder">Folder</label>
                        <select id="note-folder">
                            <option value={null}>...</option>
                            {folders.map( folder => 
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>)}
                        </select>
                    </div>
                    
                    <button 
                        className="AddNote__button-cancel"
                        onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="AddNote__button-save">
                        Add Note
                    </button>
                </form>
            </div>
        )
    }
}

export default AddNote