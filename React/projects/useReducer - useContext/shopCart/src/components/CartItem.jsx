import React from 'react'
import { useGlobalContext } from '../context'

export default function CartItem({id, title, price, img, amount }) {
    const {addItemQtd, removeItemQtd, removeItem} =  useGlobalContext();
  return (
    <li>
        <img src={img} alt={title} />
        <h4>{title}</h4>
        <p>({price})</p>
        <button className='rmv-btn' onClick={() => removeItem(id)}>remove</button>
        <div className='amout'>
            <button onClick={() => removeItemQtd(id)}>{'<'}</button>
            <span>{amount}</span>  
            <button onClick={() => addItemQtd(id)}>{'>'}</button>
        </div>
    </li>
  )
}
