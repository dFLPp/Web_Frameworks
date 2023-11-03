import React from 'react'
import {StyledShowcase} from './styled'

export default function Showcase() {
    const [index, setIndex] = React.useState(4);
  return (
    <StyledShowcase>
    <div>
    <img src={`https://ammarcode.github.io/E-commerce-product-page/images/image-product-${index}.jpg`}/>
    </div>
    <div>
    <img onClick={() => setIndex(1)} src='https://ammarcode.github.io/E-commerce-product-page/images/image-product-1.jpg'/>
    <img onClick={() => setIndex(2)} src='https://ammarcode.github.io/E-commerce-product-page/images/image-product-2.jpg'/>
    <img onClick={() => setIndex(3)} src='https://ammarcode.github.io/E-commerce-product-page/images/image-product-3.jpg'/>
    <img onClick={() => setIndex(4)} src='https://ammarcode.github.io/E-commerce-product-page/images/image-product-4.jpg'/>
    </div>
    </StyledShowcase>
  )
}
