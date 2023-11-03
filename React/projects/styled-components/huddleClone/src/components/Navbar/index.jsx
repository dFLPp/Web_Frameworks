import React from 'react'
import {StyledNav} from './styled'

export default function Navbar({openSidebar, cart}) {
  return (
    <StyledNav>
      <div>
      <button onClick={openSidebar}>+</button>
      </div>
      <div>
      <h1>Huddle Store</h1>
      </div>
      <div>
        <ul>
          <li>collections</li>
          <li>men</li>
          <li>womem</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <div>
      <h1>cart: {`${cart}`}</h1>
      </div>
    </StyledNav>
  )
}
