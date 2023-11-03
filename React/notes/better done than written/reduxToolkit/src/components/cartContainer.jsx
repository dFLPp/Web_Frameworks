import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CartItem from './cartItem'
import {openModal} from '../features/modal/modalSlice'

function CartContainer() {
  const dispatch = useDispatch();
  const {cartItems, amount, total} = useSelector((store) => store.cart);

  if(amount < 1) return <main><h1>Your bag is empty</h1></main>
  return (
   <section>
    <header>
    <h1>Your bag</h1>
    </header>
    <div>
        {
        cartItems.map((item) => <CartItem key={item.id} {...item}/>)
        }
    </div>
    <footer>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button onClick={() => dispatch(openModal())}>CLEAR CART</button>
    </footer>
   </section>
  )
}

export default CartContainer