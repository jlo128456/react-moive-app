// components/About.js
import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="about" style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h2>🎬 About This App</h2>
      <p>This movie database SPA allows users to:</p>
      <ul>
        <li>🔍 Search and filter movies</li>
        <li>➕ Add, ✏️ edit, and 🗑️ delete movies</li>
        <li>📋 Sort and browse by rating or director</li>
        <li>🛠️ All client-side using React and React Router</li>
      </ul>
      <p>Built by <strong>Jeffrey Lo</strong> using React, HTML, and custom CSS.</p>
    </div>
  );
}

export default About