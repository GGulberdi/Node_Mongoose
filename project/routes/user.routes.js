const express = require('express');

// module.exports = app => {
//     const users = require("../controllers/user.controller");

// var router = require("express").Router();

// // Create 
// router.post("/", users.create);

// // Retrieve all todo items
// router.get("/", users.findAll);

// // Retrieve all completed todo items
// // router.get("/completed", todoitems.findAllCompleted);

// // Retrieve a single with id
// router.get("/:id", users.findOne);

// // Update  with id
// router.put("/:id", users.update);

// // Delete with id
// router.delete("/:id", users.delete);

// // Delete all 
// router.delete("/", users.deleteAll);

// // app.use('/users', router);
// // };

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get("/", userController.findAll);
router.post("/", userController.create);
router.get("/:id", userController.findOne);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);



module.exports = router;