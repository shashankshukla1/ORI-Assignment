import React from 'react';

const Modal = ({ photo, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={photo.url} alt={photo.title} />
      </div>
    </div>
  );
};

export default Modal;
