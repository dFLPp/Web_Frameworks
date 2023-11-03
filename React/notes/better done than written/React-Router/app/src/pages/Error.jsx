import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (<>
  <main>
    <div className='inPageCenter'>
      <h1>404 - Error</h1>
      <h2>No page found</h2>
      <button><Link to='/'>Home</Link></button>  
    </div>
  </main>
  </>)
}
