// Import required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dayjs = require('dayjs');

// Define the Reaction schema
const ReactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dayjs(timestamp).format('MMM D, YYYY h:mm A')
    }
  }, { _id: false });

// TODO: Define the Thought schema
//       - thoughtText (String, required, 1 to 280 characters)
//       - createdAt (Date, default value set to the current timestamp, formatted using a getter method)
//       - username (String, required)
//       - reactions (Array of nested documents created with the Reaction schema)
//       - reactionCount (virtual property that retrieves the length of the thought's reactions array field on query)


// Export the Thought model
const Thought = mongoose.model('Thought', ThoughtSchema);
module.exports = Thought;