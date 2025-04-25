import React from 'react';
import MovieForm from './MovieForm';

function MovieModal({ onClose, onAddMovie }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="form-container">
          <button className="btn btn-red" onClick={onClose} style={{ float: "right" }}>
            ×
          </button>
          <h2>Add New Movie</h2>
          <MovieForm onAddMovie={onAddMovie} />
        </div>
      </div>
    </div>
  );
}

export default MovieModal;