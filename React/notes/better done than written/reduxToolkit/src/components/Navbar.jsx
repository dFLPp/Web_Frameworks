import React from 'react'
import {useSelector} from 'react-redux'

function Navbar() {
  const {amount} = useSelector((store) => store.cart) 
  return (<>
  <nav>
    <div className='nav-center'>
        <h3 onClick={() => document.location.reload(true)} style={{cursor: 'pointer'}}>Logo</h3>
        <div><h3>in cart: {amount}</h3></div>
    </div>
  </nav>
  </>)
}

export default Navbar