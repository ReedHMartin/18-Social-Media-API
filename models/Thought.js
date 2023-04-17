// Import required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dayjs = require('dayjs');

// Define the Reaction schema, which will be used as a subdocument in the Thought model
const ReactionSchema = new Schema({
  // Set the reactionId to a new ObjectId by default
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  // The reactionBody is a required string with a maximum length of 280 characters
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  // The username is a required string
  username: {
    type: String,
    required: true
  },
  // Set the createdAt timestamp to the current date and time by default and format it using dayjs
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dayjs(timestamp).format('MMM D, YYYY h:mm A')
  }
}, { _id: false }); // Disable the automatic creation of an _id field for Reaction subdocuments

// Define the Thought schema
const ThoughtSchema = new Schema({
  // The thoughtText is a required string with a minimum length of 1 and a maximum length of 280 characters
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  // Set the createdAt timestamp to the current date and time by default and format it using dayjs
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dayjs(timestamp).format('MMM D, YYYY h:mm A')
  },
  // The username is a required string
  username: {
    type: String,
    required: true
  },
  // The reactions field is an array of Reaction subdocuments
  reactions: [ReactionSchema]
});

// Add a virtual property to the Thought schema for reactionCount, which calculates the length of the reactions array
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Enable the use of getters in the schema, so that formatted timestamps are returned when the data is retrieved
ThoughtSchema.set('toObject', { getters: true });
ThoughtSchema.set('toJSON', { getters: true });

// Export the Thought model
const Thought = mongoose.model('Thought', ThoughtSchema);
module.exports = Thought;
