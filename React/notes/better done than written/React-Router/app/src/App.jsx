import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, About, Products, Error, SingleProd, Dashboard, Login} from './pages/'
import SharedLayout from './components/SharedLayout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (<>
  {/* se conecta com o browser */}
  <BrowserRouter>
    {/* Parent em comum de todas as rotas */}
    <Routes>
      
      {/* Rota individual - provide full path */}
      <Route path='/bananas/bananas' element={<main><h1>BANANAS</h1></main>}/>

      {/* nested routes - relative path & shared layout */}
      <Route path='/' element={<SharedLayout/>}>
        {/* aqui dentro, todas as rotas vão possuir/mostrar o que esta dentro de <sharedLayout/> */}
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}/>
        {/* placeholder && url params */}
        <Route path='products/:productID' element={<SingleProd/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={
          // esse component abaixo foi eu que criei, ele literalmente é uma camada fisica que vai verificar se o user existe
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='*' element={<Error/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  </>)
}

export default App

//Anotações sobre React Router 6