import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (<>
  <main>
    <div className='inPageCenter'>
      <h1>Now i am in the home page</h1>
      <button><Link to='/login'> Login </Link></button>
    </div>
  </main>
  </>)
}
