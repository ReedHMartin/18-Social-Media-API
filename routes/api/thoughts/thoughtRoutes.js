// Import required packages (Express)
const express = require('express');

// Import Thought model
const Thought = require('../models/Thought');

// Import thoughtControllers
const thoughtControllers = require('../controllers/thoughtControllers');

// Create a new router instance from Express
const router = express.Router();

// Set up the API routes for thoughts
router
  .route('/')
  .get(thoughtControllers.getAllThoughts)
  .post(thoughtControllers.createThought);

router
  .route('/:id')
  .get(thoughtControllers.getThoughtById)
  .put(thoughtControllers.updateThought)
  .delete(thoughtControllers.deleteThought);

// Set up the API routes for reactions to thoughts
router
  .route('/:thoughtId/reactions')
  .post(thoughtControllers.createReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(thoughtControllers.deleteReaction);

// Export the router
module.exports = router;