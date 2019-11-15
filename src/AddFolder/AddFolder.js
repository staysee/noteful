import React from 'react'
import ValidationError from '../ValidationError/ValidationError'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types'
import config from '../config'
import './AddFolder.css'

class AddFolder extends React.Component {
    static contextType = NotefulContext;

    constructor(props){
        super(props);
        this.state = {
            folderName: {
                name: '',
                touched: false
            }
        }
    }

    
    setFolderName = folderName => {
        this.setState({
            folderName: {
                name: folderName,
                touched: true
            }
        })
    }
    
    validateFolderName = fieldValue => {
        const folderName = this.state.folderName.name.trim();
        if (folderName.length === 0){
            return 'Folder name is required';
        } else if (folderName.length < 2){
            return 'Name must be at least 2 characters long';
        }
    }

    handleClickCancel = () => {
        this.props.history.push('/');
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const  { folderName } = this.state;
        const folder = {
            name: folderName.name
        }
        console.log(`Folder: `, folder)

        const url = `${config.API_ENDPOINT}/folders`;
        const options = {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
                'content-type': 'application/json'
            }
        };

        console.log(options)

        fetch(url, options)
            .then(res => {
                if (!res.ok)
                    return res.json().then( e => Promise.reject(e))
                return res.json()
            })
            .then( folder => {
                console.log(folder)
                this.context.addFolder(folder)
                this.props.history.push(`/folders/${folder.id}`)
            })
            .catch( err => {
                this.setState({
                    error: err.message
                })
            })
    }

    

    render() {
        const folderNameError = this.validateFolderName();

        return (
            <div className="AddFolder">
                <h2>Create a New Folder</h2>

                <form 
                    className="AddFolder__form"
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        autoComplete="off"
                        id="name" 
                        name="name" 
                        onChange={e => this.setFolderName(e.target.value)} />
                    {this.state.folderName.touched && ( 
                        <ValidationError message={folderNameError} /> 
                    )}

                    <button 
                        className="AddFolder__cancel-button"
                        onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="AddFolder__submit-button"
                        disabled={this.validateFolderName()}>
                        Add Folder
                    </button>
                </form>
            </div>

        )
    }
}

export default AddFolder

AddFolder.propTypes = {
    history: PropTypes.object
}