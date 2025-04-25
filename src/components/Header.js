import React from 'react';

function Header({
  searchTerm,
  setSearchTerm,
  sortAZ,
  setSortAZ,
  selectedDirector,
  setSelectedDirector,
  selectedRating,
  setSelectedRating,
  directors,
  ratings,
  openModal,
}) {
  function handleSearchClick() {
    // You could trigger filtering manually here,
    // but it's not necessary unless you debounce
    // For now, this is just UI feedback
    console.log("Search clicked:", searchTerm);
  }

  return (
    <header>
      <h1>🎬 Movie and TV Database</h1>

      <div className="search-container">
        <input
          id="search-input"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-blue" onClick={handleSearchClick}>
          🔍 Search
        </button>
        <button className="btn btn-green" onClick={openModal}>
          ➕ Add Movie
        </button>
      </div>

      <div className="filters" style={{ marginTop: '20px' }}>
        <button
          className="btn btn-blue"
          onClick={() => setSortAZ(!sortAZ)}
        >
          Sort A–Z {sortAZ ? '▲' : '▼'}
        </button>

        <select
          className="btn"
          value={selectedDirector}
          onChange={(e) => setSelectedDirector(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          <option value="">All Directors</option>
          {directors.map((dir) => (
            <option key={dir} value={dir}>
              {dir}
            </option>
          ))}
        </select>

        <select
          className="btn"
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          style={{ marginLeft: '10px' }}
        >
          <option value="">All Ratings</option>
          {ratings.map((rate) => (
            <option key={rate} value={rate}>
              {rate}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
