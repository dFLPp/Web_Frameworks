import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context/index'
import sublinks from '../db/data'

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <div className={`sidebar-wrapper ${isSidebarOpen && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return(
              <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map(({ url, icon, label }, index) => <a key={index} href={url}>{icon}{label}</a>)}
              </div>
              </article>
            )})
          }
        </div>
      </aside>
    </div>
  )
}