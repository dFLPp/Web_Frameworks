import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Submenu = () => {
  const { isSubmenuOpen,  menu: { page, links }, location } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-1')
  
  
  useEffect(() => {
    setColumns('col-1')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if (links.length === 3) {
      setColumns('col-2')
    }
    if (links.length > 3) {
      setColumns('col-3')
    }
  }, [page, location, links])
  

  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return <a key={index} href={url}> {icon} {label} </a>
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu