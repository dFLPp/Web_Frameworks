import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import TourList from './components/TourList'
import './App.css'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      setList(data);
    } 
    catch (error) {
      setIsError(true);
      console.log(error);
    } 
    finally{
      setIsLoading(false);
    }
  }
  useEffect(() => getData, []);

  //funções também podem ser passadas como props
  const removeTour = (id) => {
    setList((oldList) => {
      return oldList.filter((tour) => tour.id !== id)
    })
  }

  if(isLoading) return <main><Loading/></main>
  if(isError) return <main style={{textAlign: 'center'}}><h2>An Error Ocourred - try again Later</h2></main>
  if(list.length === 0) return <main style={{textAlign: 'center'}}><h2>No Tours to show right now</h2> <button className='btn' onClick={getData}>REFRESH</button></main>
  else return <main><TourList tours={list} removeTour={removeTour}/></main> //(1)
}

export default App

// OBS 1: O que acontece aí é o 'Prop Drilling'. 
//Precisamos passar uma função do App para o component (e não criar ela no component) pois precisamos preservar/compartilhar o estado atual do app
//Se fissemos um onclick direto no Tour component, ele não saberia qual é o state de 'list', aqui no App, deixando as coisas desconctadas
//Uma das alternativas e passar a função/estado de prop em prop, até chegar no destino (esse caso) ou usar a 'context API'