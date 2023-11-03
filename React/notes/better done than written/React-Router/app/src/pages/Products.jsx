import React from 'react'
import { Link } from "react-router-dom"
import { useGlobalContext } from '../context'

export default function Products() {
  const {list} = useGlobalContext();

  if(list.length === 0) return(
    <>
    <div className="inPageCenter">
        <h4>No items avaiable</h4>
        {/* OBS: como eu não estou guardando os estados, ao refreshar a pagina, ele seram perdidos */}
        <button className='Refresh' onClick={() => window.location.reload()}>Refresh</button>
    </div>
    </>
  )

   return (<>
    <main>
      <div className="inPageCenter displayItems">
        {
          list.map((item) => {
            const {name, id, image} = item;
            return(
            <article key={id}>
              <img src={image} alt={name} />
              <h2>{name}</h2>

              <button className='goToItem'>
              <Link to={`/products/${id}`}> see more</Link>
              </button>
            </article>
          )})
        }
      </div>
    </main>
  </>)
}
