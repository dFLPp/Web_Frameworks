import React, {useState} from 'react'

export default function List({items, removeItem, editItem, clearList}) {
  return (<>    
  <ul>
    {
    items.map((item) => {
    const { id, text } = item;
    return (
        <li key={id}>
        <p>{text}</p>
         <button onClick={() => editItem(id)}>E</button>
        <button
            onClick={() => removeItem(id)}>X</button>
        </li>
    )})
    }
  </ul>
  <button onClick={clearList}>{items.length > 0 ? 'Clear list': null}</button>
  </>)
}
