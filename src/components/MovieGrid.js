// components/MovieGrid.js
import React from "react";

function MovieGrid({ movies, expandedId, setExpandedId, onEdit, onDelete }) {
  const toggleCard = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="movie-grid">
      {movies.map((movie) => {
        const isExpanded = expandedId === movie.id;
        return (
          <div className={`movie-card ${isExpanded ? "expanded" : ""}`} key={movie.id}>
            {!isExpanded && (
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-thumb"
              />
            )}
            <h3 onClick={() => toggleCard(movie.id)}>{movie.title}</h3>

            {isExpanded && (
              <div className="movie-details">
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Rated:</strong> {movie.rating}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Plot:</strong> {movie.plot}</p>

                <div style={{ marginTop: "10px" }}>
                  <button
                    className="btn btn-blue"
                    onClick={() => onEdit(movie)}
                    style={{ marginRight: "8px" }}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-red"
                    onClick={() => onDelete(movie.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MovieGrid;
