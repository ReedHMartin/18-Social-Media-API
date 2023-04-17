// Import required packages (User and Thought models)
const { User } = require('../models');

const userControllers = {
    // Method to retrieve all users from the database
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
  
    // Method to retrieve a single user by its _id and populate thought and friend data
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
            } else {
                res.json(user);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Method to create a new user and save it to the database
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    // Method to update a user by its _id with the provided data
    updateUser: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updatedUser) {
                res.status(404).json({ message: 'No user with this id!' });
            } else {
                res.json(updatedUser);
            }
        } catch (err) {
            res.status(400).json(err);
        }
    },

    // Method to remove a user by its _id (bonus: remove user's associated thoughts when deleted)
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
            } else {
                await Thought.deleteMany({ _id: { $in: user.thoughts } });
                await User.findByIdAndDelete(req.params.id);
                res.json({ message: 'User and associated thoughts deleted!' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Method to add a new friend to a user's friend list by updating the friends array
    addFriend: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
            if (!updatedUser) {
                res.status(404).json({ message: 'No user with this id!' });
            } else {
                res.json(updatedUser);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Method to remove a friend from a user's friend list by updating the friends array
    removeFriend: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
            if (!updatedUser) {
                res.status(404).json({ message: 'No user with this id!' });
            } else {
                res.json(updatedUser);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
  
module.exports = userControllers;