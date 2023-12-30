import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
    </div>
  );
};

export default BookCard;
