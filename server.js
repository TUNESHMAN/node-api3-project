// Imported needed middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
// We need to connect the server to the router so that the other endpoints can be accessed
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

// Here I am using my pre-baked middleware, Cors and helmet
server.use(express.json()); //Line 16 gives me access to req.body
server.use(cors());
server.use(helmet());
server.use("/users", logger, userRouter);
server.use("/posts", logger, postRouter);

// Here is fleshing out a dummy API
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      "origin"
    )}`
  );
}

server.get("*", (req, res) => {
  res.status(404).json({ message: `Not found, sorry about that` });
});

// export the server to another file
module.exports = server;
