// Import required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define the User schema
const UserSchema = new Schema({
    // Define the username field with the following constraints:
    // - It should be a string
    // - It should be unique (no two users with the same username)
    // - It is required (cannot be empty)
    // - Trimmed (removes leading and trailing white spaces)
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    // Define the email field with the following constraints:
    // - It should be a string
    // - It is required (cannot be empty)
    // - It should be unique (no two users with the same email)
    // - It must match a valid email address format
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    // Define the thoughts field as an array of ObjectId values
    // Each ObjectId in the array references a Thought document
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // Define the friends field as an array of ObjectId values
    // Each ObjectId in the array references a User document (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  });
  

// Export the User model
const User = mongoose.model('User', UserSchema);
module.exports = User;
