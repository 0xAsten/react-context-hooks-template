import React, { useState } from 'react'

export const BookContext = React.createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the way of kings', author: 'brandon sanderson', id: 2 },
    { title: 'the final empire', author: 'brandon sanderson', id: 3 },
    { title: 'the hero of ages', author: 'brandon sanderson', id: 4 },
  ])

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
