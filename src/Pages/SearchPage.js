import React, { useState } from 'react';
import BookSearch from '../Components/BookSearch';
import Navbar from '../Components/Navbar';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(() => JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addBookToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Book Search</h1>
        <BookSearch onAddBook={addBookToBookshelf} />
      </div>
    </div>
  );
};

export default SearchPage;
