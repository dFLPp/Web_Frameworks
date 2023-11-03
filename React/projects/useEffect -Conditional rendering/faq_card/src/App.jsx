import React, { useState } from 'react'
import './App.css'
import Question from './components/Question'
import data from './db/data'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
    <section>
      <div>
        <h1>Frequent questions and their rensponses</h1>
      </div>
      <div>
      {
        questions.map((data) => {
          return <Question key={data.id} {...data}/>
        })
      }
      </div>
    </section>
    </main>
  )
}

export default App
