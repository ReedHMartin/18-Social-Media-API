const Thought = require('../models/Thought');

const thoughtControllers = {
  // Create a method to get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // TODO: Create a method to get a single thought by its _id

  // TODO: Create a method to create a new thought and associate it with a user

  // TODO: Create a method to update a thought by its _id

  // TODO: Create a method to delete a thought by its _id

  // TODO: Create a method to create a reaction and associate it with a thought

  // TODO: Create a method to delete a reaction by its reactionId
};

module.exports = thoughtControllers;
