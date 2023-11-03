import React, { useState } from 'react'

function Question({title, info}) {
  const [expand, setExpand] = useState(false);
  return (
    <article>
        <div className='needed'><h2>{title}</h2> <button onClick={() => setExpand(!expand)}>{expand ? '-' : '+'}</button></div>
        <p>{expand && info}</p>
    </article>
  )
}

export default Question
