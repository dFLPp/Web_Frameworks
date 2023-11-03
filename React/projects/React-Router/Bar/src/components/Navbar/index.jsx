import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div>
        <h2><Link to='/'>logo</Link></h2>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
      </div>
    </nav>
  )
}
