import React from 'react'
import '../styles/navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <nav className="navbar" id="home">
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>contact</a></li> 
          <li><Link to="/resume">resume</Link></li>
        </ul>
      </nav>
      </>
    )
}