import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const data1 = await response1.json();

        const response2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        const data2 = await response2.json();

        setBooks([...data1.items, ...data2.items]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Book App</h1>
      <div className="book-list">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
