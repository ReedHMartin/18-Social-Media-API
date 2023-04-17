// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const dayjs = require('dayjs');

// Import API routes
const userRoutes = require('./routes/api/users/userRoutes');
const thoughtRoutes = require('./routes/api/thoughts/thoughtRoutes');

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

// Connect to your MongoDB database using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Set up API routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});