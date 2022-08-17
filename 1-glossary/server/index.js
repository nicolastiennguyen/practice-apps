require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const controllers = require('./controllers/words.js')
const PORT = 3000 || process.env.PORT

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// routes:
app.post('/glossary', (req, res) => {
  console.log('post route is working')
  controllers.post(req, res);
});

app.get('/glossary', (req, res) => {
  console.log('get route is working')
  controllers.get(req, res);
})

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
