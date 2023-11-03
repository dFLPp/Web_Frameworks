import React from 'react'
import Product from '../../exComponents/Product'
import { useFetch } from './1.customHook'
//A url não funciona mas dá pra entender a logica
const url = 'https://course-api.netlify.app/api/react-prop-types-example'

export default function PropValidation() {
    const {products} = useFetch(url);

  return (
    <div>
        <h1>Products</h1>
        <section className="products">
            {products.map(product => <Product key={product.id} {...product} />)}
        </section>
    </div>
  )
}
