// Import required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const UserSchema = new Schema({
  // Define the username field as a unique and required string
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  // Define the email field as a unique and required string, validate it against a regular expression to ensure it's a valid email address, and display a custom error message if the validation fails
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  // Define the thoughts field as an array of ObjectIds that reference Thought documents, creating a one-to-many relationship between User and Thought
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  // Define the friends field as an array of ObjectIds that reference other User documents, creating a self-referential relationship for the User model
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

// Create a User model from the UserSchema and export it for use in other parts of the application
const User = mongoose.model('User', UserSchema);
module.exports = User;
