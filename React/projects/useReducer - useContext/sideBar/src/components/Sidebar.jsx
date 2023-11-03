import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {links, social} from '../db/data'
import { useGlobalContext } from '../context/index'

export default function Sidebar() {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <h1>Logo</h1>
        <button className='toggle-sidebar' onClick={closeSidebar}><FaTimes/></button>
      </div>
      <ul className='links'>
        {
          links.map((link) => {
            const {id, url, text, icon} = link;
            return <li key={id}><a href={url}>{icon}&nbsp;&nbsp;&nbsp;{text}</a></li>
          })
        }
      </ul>
      <ul className='social-icons'>
        {
          social.map((link) => {
            const {id, url, icon} = link;
            return <li key={id}><a href={url}>{icon}</a></li>
          })
        }
      </ul>

    </aside>
  )
}
