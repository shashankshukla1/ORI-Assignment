import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PhotoList from './components/PhotoList';
import Modal from './components/Modal';
import { getRecentPhotos, searchPhotos } from './components/FlickrService';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Fetch recent photos when the component mounts
    getRecentPhotos().then((data) => {
      setPhotos(data);
    });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    searchPhotos(query).then((data) => {
      setPhotos(data);
    });
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <PhotoList photos={photos} onPhotoClick={handlePhotoClick} />
      {selectedPhoto && <Modal photo={selectedPhoto} onClose={closeModal} />}
    </div>
  );
};

export default App;
