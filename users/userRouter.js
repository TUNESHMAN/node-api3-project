const express = require("express");

// These are the helper functions
const users = require("./userDb");
const posts = require("../posts/postDb");

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
  // We must first find the user. However, 2 things can happen - the user id exists or not.
  const { id } = req.params;
  const newPost = req.body;
  users
    .getById(id)
    .then((user) => {
      if (id) {
        posts
          .insert(newPost)
          .then((text) => {
            console.log(text, newPost);
          })
          .catch((err) => {
            console.log(err, newPost);
          });
      } else {
        res
          .status(404)
          .json({ message: `The user with that Id does not exist` });
      }
    })
    .catch((error) => {
      res.status(404).json({ message: `The user with that Id does not exist` });
    });
});

router.get("/", (req, res) => {
  // do your magic!
  // This does not require any extra info such as id
  users
    .get()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({
        message: `Error getting users`,
      });
    });
});

router.get("/:id", (req, res) => {
  // do your magic!
  // Here, we need the id of the users. Also, the id may exist or not
  const { id } = req.params;
  users
    .getById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(500).json({ message: `User with this id does not exist` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `Error getting this user` });
    });
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
  // Here the id of the user to be deleted is needed
  const { id } = req.params;
  users
    .remove(id)
    .then((user) => {
      if (user) {
        res
          .status(301)
          .json({ message: `User ${id} deleted from the database` });
      } else {
        res.status(404).json({ message: `The user with this id not found` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `Error treating this request` });
    });
});

router.put("/:id", (req, res) => {
  // do your magic!
  // Here we need two things - the id of the user to be updated, and the updated user details
  const { id } = req.params;
  const replacementUser = req.body;
  users
    .update(id, replacementUser)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).message({ message: error.message, stack: error.stack });
    });
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
