const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://json-server-data-neiz.onrender.com";

export function fetchMovies(setMovies) {
  const cached = localStorage.getItem("movies");
  if (cached) setMovies(JSON.parse(cached));

  fetch(`${BASE_URL}/movies`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch movies");
      return res.json();
    })
    .then((data) => {
      const normalized = data.map((movie, i) => ({
        id: movie.id || i + 1,
        title: movie.Title,
        year: movie.Year,
        genre: movie.Genre,
        poster: movie.Poster,
        plot: movie.Plot,
        director: movie.Director,
        rating: movie.Rated,
      }));
      setMovies(normalized);
      localStorage.setItem("movies", JSON.stringify(normalized));
    })
    .catch((err) => console.error("Error loading movies:", err));
}

  
  export function filterMovies(movies, searchTerm, director, rating, sortAZ) {
    let result = movies.filter((m) =>
      m.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (director) result = result.filter((m) => m.director === director);
    if (rating) result = result.filter((m) => m.rating === rating);
    if (sortAZ) result.sort((a, b) => a.title.localeCompare(b.title));
    return result;
  }
  