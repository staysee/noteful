import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import './Note.css'

class Note extends React.Component {
    static contextType = ApiContext;

    render() {
        const { id, name, modified } = this.props;
        return (
            <div className="Note">
                <h2 className="Note__title">
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                </h2>
                
                <div className="Note__date">
                    Modified on {modified}
                </div>
    
                <button className="Note__delete">
                    Delete Note
                </button>
            </div>
        )
    }
}

export default Note