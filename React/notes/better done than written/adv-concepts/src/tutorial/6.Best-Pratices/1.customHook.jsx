import React, {useState, useEffect, useCallback} from 'react'

export const useFetch = (url) => {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const getData = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
  }, [url])

  //O react pede para que eu coloque a função 'getData' na dependecy array. Mas isso geraria um loop infinito
  //Para resolver isso, basta usar useCallback na declaração dessa função. Dessa forma a função só será 
  //re-executada quando a url for alterada, o que vai impidir o useEffect de gerar um infinite loop
  useEffect(() => {getData()}, [url, getData])
  return {loading, data}
}

//A ideia é criar um hook pessoal/personalizado, dessa forma podemos reutilizar essa funcionalidade em outros lugares do app
//No exemplo do carrinho de compras nos utilizamos um customHook diferente desse (pasta projects). Para ver esse ex, va para o proximo arquivo
//OBS: O nome dos custom hooks devem sempre começar com 'use'