// App.js — Main entry point with routing support

// Core React imports for component creation and state management
import React, { useEffect, useState } from "react";

// React Router imports for client-side navigation and route rendering
import { Routes, Route, useNavigate } from "react-router-dom";

// Component that contains search, filter, and modal trigger logic
import Header from "./Header";

// Component responsible for displaying a grid of movie cards
import MovieGrid from "./MovieGrid";

// Modal component used for both adding and editing movies
import MovieModal from "./MovieModal";

// Standalone movie form component used at /movies/new route
import MovieForm from "./MovieForm";

// About page component displayed at /about route
import About from "./About";

// Navigation bar component with route links
import Navbar from "./Navbar";

// Global stylesheet applied across the application
import "../index.css";

function App() {
  // Application state
  const initialCount = 6;
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);

  const navigate = useNavigate();

  // Load movie data from JSON file
  useEffect(() => {
    const cachedMovies = localStorage.getItem("movies");
    if (cachedMovies) {
      // Immediately display cached movies
      setMovies(JSON.parse(cachedMovies));
    }
  
    // Fetch fresh data from API
    fetch("https://json-server-data-neiz.onrender.com/movies")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch movies");
        return res.json();
      })
      .then((data) => {
        const normalized = data.map((movie, index) => ({
          id: movie.id || index + 1,
          title: movie.Title,
          year: movie.Year,
          genre: movie.Genre,
          poster: movie.Poster,
          plot: movie.Plot,
          director: movie.Director,
          rating: movie.Rated,
        }));
        
        // Update UI and cache with fresh data
        setMovies(normalized);
        localStorage.setItem("movies", JSON.stringify(normalized));
      })
      .catch((err) => console.error("Error loading movies from API:", err));
  }, []);
  // Generate unique filter options
  const directors = [...new Set(movies.map((m) => m.director))].sort();
  const ratings = [...new Set(movies.map((m) => m.rating))].sort();

  // Filter and sort movie list
  let filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedDirector) {
    filteredMovies = filteredMovies.filter((m) => m.director === selectedDirector);
  }

  if (selectedRating) {
    filteredMovies = filteredMovies.filter((m) => m.rating === selectedRating);
  }

  if (sortAZ) {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Add new movie
  function handleAddMovie(newMovie) {
    const movieWithId = {
      ...newMovie,
      id: movies.length > 0 ? movies[movies.length - 1].id + 1 : 1,
    };
    setMovies([...movies, movieWithId]);
    navigate("/");
  }

  // Delete movie by ID
  function handleDeleteMovie(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
    if (confirmDelete) {
      setMovies((prev) => prev.filter((movie) => movie.id !== id));
    }
  }

  // Start editing a movie
  function handleEditMovie(movie) {
    setEditingMovie(movie);
    setIsModalOpen(true);
  }

  // Save updated movie data
  function handleUpdateMovie(updatedMovie) {
    const updatedList = movies.map((m) =>
      m.id === updatedMovie.id ? updatedMovie : m
    );
    setMovies(updatedList);
    setIsModalOpen(false);
    setEditingMovie(null);
  }

  return (
    <>
      {/* Navigation bar */}
      <Navbar />

      {/* Route handling */}
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Header
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortAZ={sortAZ}
                setSortAZ={setSortAZ}
                selectedDirector={selectedDirector}
                setSelectedDirector={setSelectedDirector}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                directors={directors}
                ratings={ratings}
                openModal={() => {
                  setIsModalOpen(true);
                  setEditingMovie(null);
                }}
              />

              <main>
                <MovieGrid
                  movies={filteredMovies.slice(0, visibleCount)}
                  expandedId={expandedId}
                  setExpandedId={setExpandedId}
                  onEdit={handleEditMovie}
                  onDelete={handleDeleteMovie}
                  loading={movies.length === 0}
                />

                {/* Show more / less functionality */}
                {filteredMovies.length > initialCount && (
                  <div className="show-more-container">
                    {visibleCount < filteredMovies.length ? (
                      <button
                        className="btn btn-green"
                        onClick={() => setVisibleCount(visibleCount + 6)}
                      >
                        Show More
                      </button>
                    ) : (
                      <button
                        className="btn btn-green"
                        onClick={() => {
                          setVisibleCount(initialCount);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Show Less
                      </button>
                    )}
                  </div>
                )}
              </main>

              {/* Edit modal */}
              {isModalOpen && (
                <MovieModal
                  onClose={() => {
                    setIsModalOpen(false);
                    setEditingMovie(null);
                  }}
                  onAddMovie={handleAddMovie}
                  onUpdateMovie={handleUpdateMovie}
                  editingMovie={editingMovie}
                />
              )}
            </>
          }
        />

        {/* New movie form */}
        <Route
          path="/movies/new"
          element={
            <div className="form-container">
              <h2>Add a New Movie</h2>
              <MovieForm onSubmit={handleAddMovie} />
            </div>
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={
            <div className="about">
              <About />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
