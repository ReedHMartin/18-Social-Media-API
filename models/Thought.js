// Import required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dayjs = require('dayjs');

// TODO: Define the Reaction schema (not a model, used as a subdocument schema for the Thought model)
//       - reactionId (ObjectId, default value set to a new ObjectId)
//       - reactionBody (String, required, 280 character maximum)
//       - username (String, required)
//       - createdAt (Date, default value set to the current timestamp, formatted using a getter method)

// TODO: Define the Thought schema
//       - thoughtText (String, required, 1 to 280 characters)
//       - createdAt (Date, default value set to the current timestamp, formatted using a getter method)
//       - username (String, required)
//       - reactions (Array of nested documents created with the Reaction schema)
//       - reactionCount (virtual property that retrieves the length of the thought's reactions array field on query)


// Export the Thought model
const Thought = mongoose.model('Thought', ThoughtSchema);
module.exports = Thought;