import React from 'react'
import { useGlobalContext } from '../context'

export default function Navbar() {
    const {amount} = useGlobalContext();
  return (
    <nav>
        <h3>Cart App</h3>
        <h3>Qtd: {amount}</h3>
    </nav>
  )
}
