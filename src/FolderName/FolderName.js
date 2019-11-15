import React from 'react'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types'
import './FolderName.css'

class FolderName extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = NotefulContext;

    render() {
        console.log(this.context);
        const { notes, folders } = this.context;
        const { noteId } = this.props.match.params;
        const note = notes.find( note => note.id === noteId) || {};
        const folder = folders.find( folder => folder.id === note.folderId);

        return (
            <div className="FolderName">
                <button
                    className="goBack-button"
                    onClick={() => this.props.history.goBack()}
                >
                    Back
                </button>
    
                {folder && (
                    <h3 className="FolderName__name">
                        {folder.name}
                    </h3>
                )}
    
            </div>
        )
    }
}

export default FolderName

FolderName.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}