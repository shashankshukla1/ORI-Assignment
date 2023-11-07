import React from 'react';

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header className="App-header">
      <h1>Flickr Photo Search</h1>
      <input type="text" placeholder="Search photos..." onChange={handleSearch} />
    </header>
  );
};

export default Header;
