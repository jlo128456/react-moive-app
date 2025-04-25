// components/MovieModal.js
import React from 'react';
import MovieForm from './MovieForm';

function MovieModal({ onClose, onAddMovie, onUpdateMovie, editingMovie }) {
  // pick the right handler
  const submitHandler = editingMovie ? onUpdateMovie : onAddMovie;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>
        <h2>{editingMovie ? 'Edit Movie' : 'Add New Movie'}</h2>
        
        {/* Pass the function itself as onSubmit */}
        <MovieForm
          onSubmit={submitHandler}
          initialData={editingMovie}
        />
      </div>
    </div>
  );
}

export default MovieModal;