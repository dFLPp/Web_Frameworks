import React from 'react'
import { useGlobalContext } from '../context/index'

export default function Dashboard() {
  const {user} = useGlobalContext();
  return (<>
    <div className='inPageCenter'>
      <h1>This is your dashboard</h1>
      <h2>{user?.username}</h2>
    </div>
  </>)
}
