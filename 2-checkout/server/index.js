require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const controllers = require("./controllers/checkout.js")

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// automatically parses incoming data and stringifies outcoming data
app.use(express.json());

//Other routes here....
app.post('/checkout', (req, res) => {
  controllers.post(req, res);
  console.log('post: route working');
})

app.get('/checkout', (req, res) => {
  controllers.get(req, res);
  console.log('get: route working');
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
