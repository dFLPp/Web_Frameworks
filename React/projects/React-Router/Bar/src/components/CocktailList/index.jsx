import React from 'react'
import { useGlobalContext } from '../../context'
import {Loading, Cocktail} from '../index'

const CocktailList = () => {
  const {isLoading, cocktails} = useGlobalContext();
  if(isLoading) return <Loading/>
  if(cocktails.length < 1) return <div><h1>No cocktails</h1></div>
  return (
    <div className='content'>
      {
        cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default CocktailList