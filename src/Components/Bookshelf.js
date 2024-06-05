// src/components/Bookshelf.js
import React from 'react';

const Bookshelf = ({ books }) => (
  <div className="bookshelf">
    {books.length > 0 ? (
      books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        </div>
      ))
    ) : (
      <p>No books in your bookshelf. Add some!</p>
    )}
  </div>
);

export default Bookshelf;
