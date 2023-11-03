import React from 'react'
import {StyledSidebar, StyledOverlay} from './styled'

export default function Sidebar({closeSidebar}) {
  return (
    <StyledOverlay>
    <StyledSidebar>
       <div>
        <button onClick={closeSidebar}>X</button>
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

    </StyledSidebar>
    </StyledOverlay>
  )
}
