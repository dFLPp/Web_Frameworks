import React from 'react'

//package necessário(é tipo um typeScript, so que pior)
import  PropTypes  from 'prop-types'

export default function Product({image, price, name}) {
  const url = image && image.url
  return (
    <article>
        <img src={url || 'default error image'} alt="image" />
        <h4>{name || 'default name'}</h4>
        <p>{price || 66.6}</p>
    </article>
  )
}
Product.PropTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}


//Tipo a url não funciona anyway, mas se funciona-se, e se o dado/json que você recebe não é estruturado
//Talvez algum dos produtos não tenha imagem. Nesse caso o app iria quebrar, para impidir isso nos podemos
//fazer uma validação basica com ReactPropTypes e usar short-circuit evaluation para renderizar outra coisa