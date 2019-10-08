import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
 return(
    <header className="Header">
        <Link to='/' className="Header__Link">Noteful</Link>
    </header>
 )
}

export default Header