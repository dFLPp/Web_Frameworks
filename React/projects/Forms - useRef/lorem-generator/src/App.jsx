import React, { useState, useRef } from 'react'
import './App.css'
import data from './db/data'

function App(){
  const [paragraph, setParagraph] = useState(0);
  const [text, setText] = useState([]);

  const inputRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setParagraph(inputRef.current.value);
    let amount = parseInt(paragraph);
    setText(data.slice(0, amount));
  }

  return (<>

  <main>
    <form onSubmit={handlerSubmit}>
      <h1>how many paragraphs ?</h1>
      <input
      type='number'
      name='nParag'
      id='nParag'
      max='8'
      min='0'
      ref={inputRef}
      value={paragraph}
      onChange={(e) => setParagraph(e.target.value)}
      />
      <button type='submit'>Gerar</button>
    </form>
  </main>
  <article>
      {
        text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })
      }
  </article>

  </>)
}

export default App