// server.js
const express    = require("express");
const path       = require("path");
const jsonServer = require("json-server");
const cors       = require("cors");

const app = express();
const apiDefaults = jsonServer.defaults();
// film.json is now at the same level as server.js
const apiRouter = jsonServer.router(path.join(__dirname, "film.json"));

app.use(cors());
app.use(express.json());

// Mount JSON-Server under /api
app.use("/api", apiDefaults, apiRouter);

// Serve React's build directory
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));

// Fallback to index.html for client routes
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));