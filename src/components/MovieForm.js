// components/MovieForm.js control addig and editing movie
import React, { useEffect, useState } from 'react';

function MovieForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    genre: '',
    poster: '',
    plot: '',
    director: '',
    rating: '',
  });

  // Load initial data if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);

    // Clear form only if adding, not editing
    if (!initialData) {
      setFormData({
        title: '',
        year: '',
        genre: '',
        poster: '',
        plot: '',
        director: '',
        rating: '',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
      />
      <input
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Genre"
      />
      <input
        name="poster"
        value={formData.poster}
        onChange={handleChange}
        placeholder="Poster URL"
      />
      <input
        name="plot"
        value={formData.plot}
        onChange={handleChange}
        placeholder="Plot"
      />
      <input
        name="director"
        value={formData.director}
        onChange={handleChange}
        placeholder="Director"
      />
      <input
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating"
      />
      <button type="submit" className="btn btn-green">
        {initialData ? "Update Movie" : "Add Movie"}
      </button>
    </form>
  );
}

export default MovieForm;
