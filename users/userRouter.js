const express = require("express");

// These are the helper functions
const users = require("./userDb");

// Import the router
const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
  const newUser = req.body;
  if (newUser.name) {
    users
      .insert(newUser)
      .then((user) => {
        res.status(202).json({ message: `User added successfully` });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `The user could not be added to the database` });
      });
  } else {
    res.status(500).json({ message: `Please choose a valid username` });
  }
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

// expose the router to the outer world
module.exports = router;
