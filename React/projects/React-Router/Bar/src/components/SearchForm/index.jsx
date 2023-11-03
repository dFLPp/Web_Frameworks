import React from 'react'
import { useGlobalContext } from '../../context'

export default function SearchForm() {
  const {setTextQuery} = useGlobalContext();
  const inputRef = React.useRef('');

  const searchDrink = () => {
    setTextQuery(inputRef.current.value);
  }

  const handleSubimit = (e) => {
    e.preventDefault();
  }

  React.useEffect(() => {
    inputRef.current.focus()
  },[])

  return (
    <div>
      <form onSubmit={handleSubimit}>
        <h2>What you wanna drink?</h2>
        <input style={{padding: '1em', marginTop: '4em'}} placeholder='bananas' type="text" required ref={inputRef} onChange={searchDrink}/>
        <br/>
      </form>
    </div>
  )
}
