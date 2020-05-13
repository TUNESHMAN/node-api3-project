// Imported needed middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express(); //Line 5 gives me access to req.body

// Here is fleshing out a dummy API
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// We need to connect the server to the router so that the other endpoints can be accessed
const userRouter = require("./users/userRouter");

// Here I am using my pre-baked middleware, Cors and helmet
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(userRouter);
//custom middleware

function logger(req, res, next) {}

// export the server to another file
module.exports = server;
