import React from 'react';

const PhotoList = ({ photos, onPhotoClick }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item" onClick={() => onPhotoClick(photo)}>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
