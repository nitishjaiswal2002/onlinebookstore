import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(query);
    navigate('/');
  };

  return (
    <nav>
      <p>Kaezen</p>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
};

export default NavBar;