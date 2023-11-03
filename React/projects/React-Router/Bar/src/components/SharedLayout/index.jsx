import React from 'react'
import {Navbar} from '../index'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (<>
  <Navbar/>
  <main>
    <div className='center'>
    <Outlet/>
    </div>
  </main>
  </>)
}
