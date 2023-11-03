import React from 'react'

const Book = (props) => {
  const {id, image, title, author, children} = props.book;
  const simpleEvent = (e) => {
    const elem = e.target;
    console.log(elem);
  }
  return (
    <>
    <article className='bookComponent'>
      <div>
        <img src={image} alt="prev" />
      </div>
      <div onClick={simpleEvent}>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p>{children}</p>
        <span>{id}</span>
      </div>
    </article>
    </>
  )
}

export default Book
//Você pode acessar/usar JS dentro do return (JSX) ao usar chaves '<p>{6+6}</p>'
//Podemos passar properties (props) para uma function component. Props são objetos.
//React não pode renderizar objetos. Por exemplo, não pode renderizar 'bookDS', sendo necessário usar o 'map()'