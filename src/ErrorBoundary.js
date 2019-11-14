import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        if (this.state.hasErorr){
            return (
                <h2>Oops! An error has occured here.</h2>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary