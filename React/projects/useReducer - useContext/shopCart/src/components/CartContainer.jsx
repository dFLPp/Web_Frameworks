import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'


export default function CartContainer(){
    const {cart, total, clearCart } = useGlobalContext();
    if(cart.length === 0) return(
        <main><h2>Your Cart is empty</h2></main>
    )
    return (<>
    <main>
        <h2>Your Cart</h2>
        <ul>
        {
        cart.map((item) =>  <CartItem key={item.id} {...item} />)
        }
        </ul>
        <h1>Total price: U$ {total}</h1>
        <button onClick={clearCart}>Clear Cart</button>
    </main>
  </>)
}
