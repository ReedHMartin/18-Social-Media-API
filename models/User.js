// Import required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// TODO: Define the User schema
//       - username (String, unique, required, trimmed)
//       - email (String, required, unique, must match a valid email address)
//       - thoughts (Array of _id values referencing the Thought model)
//       - friends (Array of _id values referencing the User model, self-reference)
//       - friendCount (virtual property that retrieves the length of the user's friends array field on query)

// Export the User model
const User = mongoose.model('User', UserSchema);
module.exports = User;
