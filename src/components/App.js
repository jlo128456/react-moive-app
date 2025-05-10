//main App entry logic 
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MovieForm from "./MovieForm";
import About from "./About";
import HomeRoute from "./HomeRoute";
import {fetchMovies, filterMovies,DEFAULT_VISIBLE_COUNT } from "./utils";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => fetchMovies(setMovies), []);
  const filtered = filterMovies(movies, searchTerm, selectedDirector, selectedRating, sortAZ);
  const directors = [...new Set(movies.map(m => m.director))].sort();
  const ratings = [...new Set(movies.map(m => m.rating))].sort();

  const handleAdd = (newMovie) => {
    const id = movies.length ? movies[movies.length - 1].id + 1 : 1;
    setMovies([...movies, { ...newMovie, id }]);
    navigate("/");
  };

  const handleUpdate = (updated) => {
    setMovies(movies.map(m => (m.id === updated.id ? updated : m)));
    closeModal();
  };

  const handleDelete = (id) =>
    window.confirm("Are you sure?") && setMovies(movies.filter(m => m.id !== id));

  const showModal = () => {
    setIsModalOpen(true);
    setEditingMovie(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingMovie(null);
  };

  const editMovie = (movie) => {
    setEditingMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomeRoute
              {...{
                filtered, visibleCount, setVisibleCount,
                searchTerm, setSearchTerm, sortAZ, setSortAZ,
                selectedDirector, setSelectedDirector,
                selectedRating, setSelectedRating,
                directors, ratings, showModal,
                isModalOpen, closeModal, handleAdd,
                handleUpdate, setExpandedId,
                expandedId, editMovie,
                handleDelete, editingMovie
              }}
            />
          }
        />
        <Route path="/movies/new" element={<MovieForm onSubmit={handleAdd} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
