// BookDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!bookDetails) {
    return <p>Loading...</p>;
  }

  const { volumeInfo } = bookDetails;

  return (
    <div>
      <h2>{volumeInfo.title}</h2>
      <p>Author: {volumeInfo.authors && volumeInfo.authors.join(', ')}</p>
      <p>Description: {volumeInfo.description}</p>
      <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />
      <p>Published Date: {volumeInfo.publishedDate}</p>
      <p>Page Count: {volumeInfo.pageCount}</p>
      <a href={volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
        Read Now
      </a>
      <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
};

export default BookDetail;
