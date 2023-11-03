import { useState } from 'react'
import './App.css'
import SingleColor from './components/singleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState();
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#14c4b0').all(10));

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (<>
    <section className="container">
      <h3>Color generator</h3>
      <form onSubmit={submitHandler}>
        <input className='colorSelect' type="color" value={color} onChange={(e) => setColor(e.target.value)} defaultValue="#14c4b0"/>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className={`${error? 'error':null}`} placeholder="#14c4b0"/>
        <button className='btn' type='submit'>submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color, index) => {
        return <SingleColor key={index} index={index} {...color}/>
      })}
    </section>
  </>)
}

export default App
