// Imported needed middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express(); //Line 5 gives me access to req.body

// These are the helper functions
const users = require("./users/userDb");

// Here is fleshing out a dummy API
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// Here I am using my pre-baked middleware, Cors and helmet
server.use(cors());
server.use(helmet());
server.use(express.json());

//custom middleware

function logger(req, res, next) {}

// export the server to another file
module.exports = server;
