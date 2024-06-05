import React from 'react';

const BookCard = ({ book, onAdd }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
    <button onClick={() => onAdd(book)}>Add to Bookshelf</button>
  </div>
);

export default BookCard;
