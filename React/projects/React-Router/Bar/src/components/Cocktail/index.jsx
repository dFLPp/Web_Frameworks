import React from 'react'
import { Link } from 'react-router-dom'

export default function Cocktail({id, name, image, info, glass}) {
  return (
    <div className='item'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <button><Link to={`/cocktail/${id}`}>more info</Link></button>
    </div>
  )
}
