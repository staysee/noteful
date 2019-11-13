import React from 'react'
import NotefulContext from '../NotefulContext'
import config from '../config'
import './AddFolder.css'

class AddFolder extends React.Component {
    static contextType = NotefulContext;

    handleSubmit = event => {
        event.preventDefault();
        
        const folder = {
            name: event.target['folder-name'].value
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

    handleChange = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="AddFolder">
                <h2>Create a New Folder</h2>

                <form 
                    className="AddFolder__form"
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="folder-name">Name</label>
                    <input 
                        type="text" 
                        id="folder-name" 
                        name="folder-name" 
                        onChange={this.handleChange} />
                    
                    <button className="AddFolder__cancel-button">
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="AddFolder__submit-button">
                        Add Folder
                    </button>
                </form>
            </div>

        )
    }
}

export default AddFolder