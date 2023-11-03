import React,{ useEffect } from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/cartContainer'
import { useDispatch, useSelector } from 'react-redux'
import {getTotals,  getCartItems} from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const {cartItems, isLoading} = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if(isLoading) return <main><h1>Loading...</h1></main>

  return (<>
  {isOpen && <Modal/>}
  <Navbar/>
  <CartContainer/>
  </>)
}

export default App
