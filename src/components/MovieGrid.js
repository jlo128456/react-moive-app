import React from "react";
import "./MovieGrid.css";

const PlaceholderCard = () => (
  <div className="movie-card placeholder">
    <img
      src="https://via.placeholder.com/300x450?text=Loading..."
      alt="Loading..."
      className="movie-thumb"
    />
    <h3 className="placeholder-title">Loading...</h3>
  </div>
);

const MovieCard = ({ movie, isExpanded, toggleCard, onEdit, onDelete }) => (
  <div className={`movie-card ${isExpanded ? "expanded" : ""}`}>
    {!isExpanded && (
      <img src={movie.poster} alt={movie.title} className="movie-thumb" />
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
            Edit
          </button>
          <button
            className="btn btn-red"
            onClick={() => onDelete(movie.id)}
          >
            Delete
          </button>
        </div>
      </div>
    )}
  </div>
);

function MovieGrid({ movies, expandedId, setExpandedId, onEdit, onDelete, loading }) {
  const toggleCard = (id) => setExpandedId(prev => (prev === id ? null : id));
  const displayMovies = loading ? Array.from({ length: 4 }) : movies;
  const isSingle = !loading && movies.length === 1;

  return (
    <div className={`movie-grid ${isSingle ? "single-card" : ""}`}>
      {displayMovies.map((movie, i) =>
        loading ? (
          <PlaceholderCard key={`placeholder-${i}`} />
        ) : (
          <MovieCard
            key={movie.id}
            movie={movie}
            isExpanded={expandedId === movie.id}
            toggleCard={toggleCard}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      )}
    </div>
  );
}

export default MovieGrid;
