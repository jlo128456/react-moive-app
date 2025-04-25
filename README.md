# 🎬 React Movie App

A modern, single-page movie management app built with **React**, styled with custom CSS, and powered by a mock REST API using **JSON Server**.

Users can browse, search, filter, sort, add, edit, and delete movies — all on a responsive, interactive interface.

---

## 🚀 Features

- ✅ Built with Create React App (CRA)
- ✅ SPA navigation with React Router
- 🔍 Live search by movie title
- 🎯 Filter by director and rating
- 🔤 Sort movies alphabetically (A–Z)
- ➕ Add new movies (form or modal)
- ✏️ Edit existing movies
- ❌ Delete movies with confirmation
- 🔁 Show more / show less pagination
- 🧪 Mock REST API using `json-server`

---

## 🗂 Folder Structure

```
src/
├── App.js                # Main app logic and routes
├── components/
│   ├── Header.js         # Search, filter, sort, and modal trigger
│   ├── MovieGrid.js      # Grid layout for movie cards
│   ├── MovieModal.js     # Add/Edit modal
│   ├── MovieForm.js      # Full-form component at /movies/new
│   ├── Navbar.js         # Navigation bar
│   └── About.js          # About page
├── index.js              # React root entry
└── index.css             # Global styles
```

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-movie-app.git
cd react-movie-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Prepare the JSON Server

Create a file called `film.json` in your project root:

```json
{
  "movies": [
    {
      "id": 1,
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora...",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "https://your-image-url.jpg"
    }
  ]
}
```

Then start the JSON server:

```bash
npx json-server --watch film.json --port 3001
```

This will run at: [http://localhost:3001/movies](http://localhost:3001/movies)

### 4. Start the React App

Open another terminal window:

```bash
npm start
```

This will start the app at: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Routes

| Path            | Description                   |
|------------------|-------------------------------|
| `/`              | Home page with all movies     |
| `/movies/new`    | Page to add a new movie       |
| `/about`         | About page                    |

---

## ⚙️ JSON Server Tips

- To reset the data, stop the server, update `db.json`, and restart it.
- You can edit `db.json` directly while testing.

---

## 🛠 Technologies Used

- React (Create React App)
- React Router DOM
- JavaScript (ES6+)
- HTML & CSS
- JSON Server

---

## 📘 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Jeffrey Lo**  
📧 [j.lo128456@gmail.com](mailto:j.lo128456@gmail.com)  
🔗 [Portfolio](https://jlo128456.github.io/Personal_Blog/)

---

## 🌟 Future Improvements

- Add star ratings and reviews
- Persist data with real backend (e.g. Firebase or Express)
- Add animations and transitions
- Improve mobile responsiveness

---

> Feel free to fork and contribute!