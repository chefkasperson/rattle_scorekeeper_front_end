import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo darken-1">
      <div className="container">
        <h5 className="left">Rattle Scorekeeper</h5>
      <ul className="right">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/create'>New Game</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/games/1'>Current Game</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar