import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'

//O conteudo desse component é compartilhado para todos os seus nested components
export default function SharedLayout() {
  return (<>
  <Navbar/>
  <main>
     {/*
    O conteudo de cada component respectivo a sua nested route vai ser representado por esse 'Outlet'. Tipo se o route é:
    '/about' então vai pegar o 'navbar' e o component (page na realidade) associado ao 'about' e colocar no lugar do Outlet
    */}
    <Outlet/>
  </main>
  </>)
}

/*
basicamente: Que começa com '/', ou seja todas as paginas tem esse sharedLayout em especifico.
EX: '/' --> sharedLayout + 'Home' components ||'/about' --> sharedLayout + 'About' components.
*/