// Import required packages (Express)
const express = require('express');

// Import userControllers
const userControllers = require('../../controllers/userControllers');

// Create a new router instance from Express
const router = express.Router();

// TODO: Set up the API routes for users using userControllers methods
// - GET all users
// - GET a single user by its _id and populate thought and friend data
// - POST a new user
// - PUT to update a user by its _id
// - DELETE to remove a user by its _id (bonus: remove user's associated thoughts when deleted)

// TODO: Set up the API routes for a user's friend list using userControllers methods
// - POST to add a new friend to a user's friend list
// - DELETE to remove a friend from a user's friend list

// Export the router
module.exports = router;


