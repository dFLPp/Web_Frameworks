import React from 'react'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'
import {useDispatch} from 'react-redux'

function Modal() {
  const dispatch = useDispatch();
  return (<aside>
    <div>
        <button className='confirm' onClick={() => dispatch(clearCart()) && dispatch(closeModal())}>CONFIRM</button>
        <button onClick={() => dispatch(closeModal())}>CANCEL</button>
    </div>
  </aside>)
}

export default Modal