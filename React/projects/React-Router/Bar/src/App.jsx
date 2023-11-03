import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {About, Error, Home, SingleCocktail} from './pages'
import {SharedLayout} from './components'

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='cocktail/:id' element={<SingleCocktail/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>)
}

export default App
