import React from 'react'
import Showcase from '../Showcase'
import {StyledProduct} from './styled'

export default function Product({utils}) {
  const {addCart, removeCart, updateCart, temp} = utils;
  return (
    <StyledProduct>
      <Showcase/>
      <aside>
      <h3>SNEAKER COMPANY</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
      <div><p>$125.00 (50% OFF)</p><p>$250.00</p></div>

      <div>
      <button onClick={removeCart}>-</button>
      <h1>{`${temp}`}</h1>
      <button onClick={addCart}>+</button>
      <button onClick={updateCart}>add to cart</button>
      </div>
      </aside>
    </StyledProduct>
  )
}
