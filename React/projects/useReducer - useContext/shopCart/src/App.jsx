import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import {useGlobalContext}  from './context/index'

function App() {
  const {loading} = useGlobalContext();
  if(loading) return <div className='loadingComponent'><h1>Loading...</h1></div>
  return(<>
    <Navbar/>
    <CartContainer/>
  </>)
}

export default App
