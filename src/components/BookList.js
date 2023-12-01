import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetail from './BookDetail'

const BookList = () => {
  const { books, removeBook } = useContext(BookContext)

  return books.length ? (
    <div className='book-list'>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} onClick={() => removeBook(book.id)}>
              <BookDetail book={book} />
            </li>
          )
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>No books to read</div>
  )
}

export default BookList
