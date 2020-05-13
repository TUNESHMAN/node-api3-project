const express = require("express");

// Creating a Router
const router = express.Router();

// Bring in the helper functions
const users = require("../users/userDb");
const posts = require("./postDb");

router.get("/", (req, res) => {
  // do your magic!
  // does not require an Id or argument
  posts
    .get()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

router.get("/:id", (req, res) => {
  // do your magic!
  // Here, we need the id of the post
  const { id } = req.params;
  posts
    .getById(id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: `The post ${id} is not found` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

router.delete("/:id", (req, res) => {
  // do your magic!
  // It needs the id of the post to be deleted
  const { id } = req.params;
  posts
    .remove(id)
    .then((post) => {
      if (post) {
        res.status(200).json({ message: `The post ${id} has been deleted` });
      } else {
        res.status(404).json({ message: `No post with id ${id} exists` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

router.put("/:id", (req, res) => {
  // do your magic!
  // We need the id and the changes
  const { id } = req.params;
  const replacementPost = req.body;
  posts
    .update(id, replacementPost)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: `The post with id ${id} could not be found` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

// expose the router to the outer world
module.exports = router;
