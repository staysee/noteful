import React from 'react'
import '/NotePage.css'

function NotePage(props){
    return (
        <div className="NotePage">
            <Note />

            <div className="NotePage__content">
                {props.content}
            </div>
        </div>
    )
}

export default NotePage