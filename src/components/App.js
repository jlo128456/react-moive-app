import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import MovieGrid from "./MovieGrid";
import MovieModal from "./MovieModal";
import MovieForm from "./MovieForm";
import About from "./About";
import { fetchMovies, filterMovies } from "./utils";
import "../index.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies(setMovies);
  }, []);

  const filtered = filterMovies(movies, searchTerm, selectedDirector, selectedRating, sortAZ);
  const directors = [...new Set(movies.map((m) => m.director))].sort();
  const ratings = [...new Set(movies.map((m) => m.rating))].sort();

  const handleAdd = (newMovie) => {
    const id = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
    setMovies([...movies, { ...newMovie, id }]);
    navigate("/");
  };

  const handleUpdate = (updated) => {
    setMovies(movies.map((m) => (m.id === updated.id ? updated : m)));
    setIsModalOpen(false);
    setEditingMovie(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?"))
      setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header {...{ searchTerm, setSearchTerm, sortAZ, setSortAZ, selectedDirector, setSelectedDirector, selectedRating, setSelectedRating, directors, ratings }} openModal={() => { setIsModalOpen(true); setEditingMovie(null); }} />
              <MovieGrid movies={filtered.slice(0, visibleCount)} {...{ expandedId, setExpandedId }} onEdit={setEditingMovie} onDelete={handleDelete} />
              {filtered.length > 6 && (
                <div className="show-more-container">
                  <button className="btn btn-green" onClick={() => setVisibleCount(visibleCount < filtered.length ? visibleCount + 6 : 6)}>
                    {visibleCount < filtered.length ? "Show More" : "Show Less"}
                  </button>
                </div>
              )}
              {isModalOpen && (
                <MovieModal onClose={() => { setIsModalOpen(false); setEditingMovie(null); }} onAddMovie={handleAdd} onUpdateMovie={handleUpdate} editingMovie={editingMovie} />
              )}
            </>
          }
        />
        <Route path="/movies/new" element={<MovieForm onSubmit={handleAdd} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
