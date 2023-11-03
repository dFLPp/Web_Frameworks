import React from 'react'
import {Link} from 'react-router-dom'

{/* <a href=''>for external url</a>
<Link to=''>for internal url</Link> */}

export default function Navbar() {
  return (<nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/products'>Products</Link></li>
    </ul>
  </nav>)
}
