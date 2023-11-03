import React from 'react'
import {Loading} from '../components'
import { useParams, Link } from 'react-router-dom'

const url = 'thecocktaildb.com/api/json/v1/1/lookup.php?i='

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }
        setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <main><h2>no cocktail to display</h2></main>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
       <section>
        <button><Link to='/'>back home</Link></button>
        <h2 style={{marginTop:'2em'}}>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='info'>
            <p>{name}</p>
            <p>{category}</p>
            <p>{info}</p> 
            <p>{glass} </p>
            <p>Prepair mode: {instructions}</p>
            <p>ingredients: {ingredients.map((item, index) => {
              return item ? <span key={index}> {item} </span> : null
            })}</p>
            
          </div>
        </div>
      </section>
    )
  }
}
