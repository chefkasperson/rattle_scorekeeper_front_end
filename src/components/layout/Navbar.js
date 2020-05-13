import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo darken-1">
      <div className="container right">
        <Link to='/'>Home</Link>
        <Link to='/create'>New Game</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar