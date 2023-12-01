import React from 'react'

const BookDetail = ({ book }) => {
  return (
    <div className='book'>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </div>
  )
}

export default BookDetail
