import React, {useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { AppContext, useGlobalContext } from '../context/index'

export default function Home() {
  //const data = useGlobalContext();
  const {openSidebar, openModal } = useContext(AppContext);
  return (
    <main>
        <button className='sideBar-toggle' onClick={openSidebar}><FaBars/></button>
        <button className='modalButton' onClick={openModal}>Modal</button>
    </main>
  )
}
