const { User } = require('../models');

// TODO: Import required packages (User and Thought models)

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
  
    // TODO: Implement the getUserById method to retrieve a single user by its _id and populate thought and friend data
  
    // TODO: Implement the createUser method to create a new user and save it to the database
  
    // TODO: Implement the updateUser method to update a user by its _id with the provided data
  
    // TODO: Implement the deleteUser method to remove a user by its _id (bonus: remove user's associated thoughts when deleted)
  
    // TODO: Implement the addFriend method to add a new friend to a user's friend list by updating the friends array
  
    // TODO: Implement the removeFriend method to remove a friend from a user's friend list by updating the friends array
  };
  
module.exports = userControllers;