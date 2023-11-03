import React from 'react'
import {removeItem, subQtd, addQtd} from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

export default function CartItem({id, img, title, price, amount}){
  const dispatch = useDispatch();
  return (<article>
    <img src={img} alt={title}/>
    <div>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <button onClick={() => dispatch(removeItem(id))}>remove all</button>
    </div>
    <div>
        <button onClick={() => dispatch(addQtd(id))}>{'Λ'}</button>
        <h3>{amount}</h3>
        <button onClick={() => amount === 1 ? dispatch(removeItem(id)) : dispatch(subQtd(id))}>{'v'}</button>
    </div>
  </article>)
}
