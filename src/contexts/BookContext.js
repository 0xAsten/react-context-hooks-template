import React, { useState, useEffect } from 'react'

export const BookContext = React.createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState(() => {
    const books = localStorage.getItem('books')
    return books ? JSON.parse(books) : []
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: books.length + 1 }])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, setBooks, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
