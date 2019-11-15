import React from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types'
import config from '../config'
import './Note.css'

class Note extends React.Component {
    static defaultProps = {
        onDeleteNote: () => {}
    }
    
    static contextType = NotefulContext;

    handleClickDelete = event => {
        event.preventDefault()

        const noteId = this.props.id
    
        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE', 
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok){
                return res.json().then(error => Promise.reject(event))
            }
             return res.json()
        })
        .then( () => {
            this.context.deleteNote(noteId)
            this.props.onDeleteNote(noteId)
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        const { id, name, modified } = this.props;
        return (
            <div className="Note">
                <h2 className="Note__title">
                    <Link to={`/notes/${id}`}>
                        {name}
                    </Link>
                </h2>
                
                <div className="Note__date">
                    Modified {new Date(modified).toLocaleDateString()}
                </div>
    
                <button 
                    className="Note__delete"
                    onClick={this.handleClickDelete}>
                    Delete Note
                </button>
            </div>
        )
    }
}

export default Note

Note.propTypes = {
    onDelete: PropTypes.func
}