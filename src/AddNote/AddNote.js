import React from 'react'
import './AddNote.css'

class AddNote extends React.Component {
    render() {
        return(
            <div className="AddNote">
                <h2>Add a New Note</h2>
                <form className="AddNote__form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="note-name">Name</label>
                        <input type="text" id="note-name" name="note-name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note-content">Content</label>
                        <input type="text" id="note-content" name="note-content" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note-folder">Folder</label>
                        <select id="note-folder">
                            <option value={null}>...</option>
                        </select>
                    </div>

                    <button 
                        type="submit"
                        className="AddNote__button"
                    >
                        Add Note
                    </button>
                </form>
            </div>
        )
    }
}

export default AddNote