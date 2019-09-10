const express = require('express');
const router = express.Router();
const userHandler = require('./../controllers/userController');

router
    .route('/')
    .get(userHandler.getAllUsers)
    .post(userHandler.createUser);

router
    .route('/:id')
    .patch(userHandler.updateUser)
    .delete(userHandler.deleteUser)
    .get(userHandler.getUser);

module.exports = router;