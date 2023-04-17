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


  // Method to create a new thought and associate it with a user
  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Method to create a new thought and associate it with a user
  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Method to update a thought by its _id
  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true });
      if (!updatedThought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else {
        res.json(updatedThought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Method to delete a thought by its _id
  deleteThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndRemove(req.params.thoughtId);
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else {
        await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } }, { new: true });
        res.json({ message: 'Thought deleted!' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Method to create a reaction and associate it with a thought
  createReaction: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true, runValidators: true });
      if (!updatedThought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else {
        res.json(updatedThought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Method to delete a reaction by its reactionId
  deleteReaction: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
      if (!updatedThought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else {
        res.json(updatedThought);
      }
    } catch (err) {
      res.status
    }
}
};

module.exports = thoughtControllers;
