// src/pages/BookshelfPage.js
import React from 'react';
import Bookshelf from '../Components/Bookshelf';
import Navbar from '../Components/Navbar';

const ShelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>My Bookshelf</h1>
        <Bookshelf books={bookshelf} />
      </div>
    </div>
  );
};

export default ShelfPage;
