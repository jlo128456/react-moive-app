// components/MovieForm.js control addig and editing movie
import React, { useEffect, useState } from 'react';
import "./MovieForm.css" //individual css for each component

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
  {[
    "title", "year", "genre", "poster",
    "plot", "director", "rating"
  ].map((name) => (
    <input
      key={name}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      required={name === "title"}
    />
  ))}
  <button type="submit" className="btn btn-green">
    {initialData ? "Update Movie" : "Add Movie"}
  </button>
</form>
  );
}

export default MovieForm;
