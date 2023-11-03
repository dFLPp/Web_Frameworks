import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from '../reducer/index'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext(); 

const defaultState = {
    loading: false,
    cart: [],
    amount: 0,
    total: 0
}

function AppProvider({children}){
  const [state, dispatch] = useReducer(reducer, defaultState); 

  const fetchData = async () => {
    dispatch({type:'GET_CART_ITEMS'})
    const res = await fetch(url);
    const data = await res.json();
    dispatch({type:'DISPLAY_CART_ITEMS', payload: data})
  }

  useEffect(() => {
    fetchData()
  }, [])

  const clearCart = () => {
    dispatch({type:'REMOVE_ALL'})
  }

  const addItemQtd = (id) => {
    dispatch({type:'INCREASE_QTD_ITEM', payload: id})
  }
  const removeItemQtd = (id) => {
    dispatch({type:'DECREASE_QTD_ITEM', payload: id})
  }
  const removeItem = (id) => {
     dispatch({type:'REMOVE_OF_CART', payload: id})
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  return (
    <AppContext.Provider value={
        {...state, 
        clearCart,
        addItemQtd,
        removeItemQtd,
        removeItem
        }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => React.useContext(AppContext);
export {AppContext, AppProvider}