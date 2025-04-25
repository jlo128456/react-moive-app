// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">🏠 Home</Link>
      <Link className="nav-link" to="/movies/new">➕ Add Movie</Link>
      <Link className="nav-link" to="/about">ℹ️ About</Link>
    </nav>
  );
}

export default Navbar;