// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const dayjs = require('dayjs');

// Import API routes
const userRoutes = require('./routes/api/users/routes');
const thoughtRoutes = require('./routes/api/thoughts/routes');

// Set up Express app and specify port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware (body parser and CORS handling)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// TODO: Connect to your MongoDB database using Mongoose

// TODO: Set up API routes

// TODO: Start the server and listen on the specified port