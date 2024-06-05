// src/components/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ onAddBook }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value; 
    setQuery(query);
    if (query) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search for books..." />
      <div className="search-results">
        {results.map((book) => (
          <BookCard key={book.key} book={book} onAdd={onAddBook} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
