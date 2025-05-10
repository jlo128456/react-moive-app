# 🎬 React Movie App

A modern, single-page movie management app built with **React**, styled using modular **CSS**, and powered by a mock REST API hosted both **locally** and on **Render (JSON Server)**.

Users can browse, search, filter, sort, add, edit, and delete movies — all from a clean, responsive interface.

---

## 🔗 Live API (Render)

📡 https://json-server-data-neiz.onrender.com/movies

## 🖥️ Local API

You can also run the app entirely **offline with a local JSON server** on port `3001`.

---

## 🚀 Features

- ✅ Built with Create React App (CRA)
- ✅ SPA navigation using React Router
- 🔍 Real-time search by title
- 🎬 Filter by director and rating
- 🔤 Alphabetical sort (A–Z)
- ➕ Add via modal or full form
- ✏️ Edit movie details
- ❌ Confirm delete
- ⏬ Show More / Show Less
- 🧪 Local and remote mock REST APIs

---

## 🗂 Folder Structure

```
src/
├── components/
│   ├── Header.js / .css
│   ├── MovieGrid.js / .css
│   ├── MovieModal.js / .css
│   ├── MovieForm.js / .css
│   ├── Navbar.js / .css
│   └── About.js
├── App.js / App.css
├── index.js
├── utils.js
├── database/
│   └── film.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Project

```bash
git clone https://github.com/your-username/react-movie-app.git
cd react-movie-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3A. Run JSON Server Locally

Create a `film.json` file in `/database/`:

```json
{
  "movies": [
    {
      "id": 1,
      "Title": "The Matrix",
      "Year": "1999",
      "Genre": "Action, Sci-Fi",
      "Rated": "R",
      "Director": "Lana Wachowski, Lilly Wachowski",
      "Plot": "A computer hacker learns the true nature of reality.",
      "Poster": "https://your-image-url.jpg"
    }
  ]
}
```

Then start the JSON server:

```bash
npx json-server --watch database/film.json --port 3001
```

Runs at: http://localhost:3001/movies

---

### 3B. Or Use Remote API (Render)

```plaintext
https://json-server-data-neiz.onrender.com/movies
```

---

### 4. Start the React App

```bash
npm start
```

Opens at: http://localhost:3000

---

## 🔧 VS Code Setup

To get the best developer experience:

1. Open the folder in **Visual Studio Code**
2. Install these recommended extensions:
   - ✅ ESLint (`dbaeumer.vscode-eslint`)
   - ✅ Prettier - Code formatter (`esbenp.prettier-vscode`)
   - ✅ Code Spell Checker (`streetsidesoftware.code-spell-checker`)
3. (Optional) Add `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.exclude": {
    "**/node_modules": true,
    "**/build": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## 🔀 App Routes

| Route           | Description         |
|----------------|---------------------|
| `/`            | Home movie list     |
| `/movies/new`  | Add new movie       |
| `/about`       | About this project  |

---

## 🛠 Built With

- React + React Router
- CSS Modules
- JSON Server
- Render (for API hosting)

---

## 🙋‍♂️ Author

**Jeffrey Lo**  
📧 [j.lo128456@gmail.com](mailto:j.lo128456@gmail.com)  
🌐 [Portfolio](https://jlo128456.github.io/Personal_Blog/)

---

## 🌱 Future Plans

- ⭐ Add ratings and reviews
- 📱 Improve mobile responsiveness
- 🧠 Connect to Firebase or Express backend
- ✨ Add animations and transitionsd (e.g. Firebase or Express)
- Add animations and transitions
- Improve mobile responsiveness

---

> Feel free to fork and contribute!
