import React from 'react'
import { bookDS } from '../db/dataSet'
import Book from './book'

//Nested component
const BookList = () => {
  return (
    <>
    <section className='bookList'>
      {
      bookDS.map((book) =>{
        return <Book key={book.id} book={book}>
          {book.type}
        </Book>
      })}
    </section>
    </>
  )
}

export default BookList