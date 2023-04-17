// Import required packages (Express)
const express = require('express');

// Import userControllers
const userControllers = require('../../controllers/userControllers');

// Create a new router instance from Express
const router = express.Router();

// Set up the API routes for users using userControllers methods
router
  .route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);

router
  .route('/:id')
  .get(userControllers.getUserById)
  .put(userControllers.updateUser)
  .delete(userControllers.deleteUser);

// Set up the API routes for a user's friend list using userControllers methods
router
  .route('/:userId/friends/:friendId')
  .post(userControllers.addFriend)
  .delete(userControllers.removeFriend);

// Export the router
module.exports = router;


