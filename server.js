const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api/users/userRoutes');
const thoughtRoutes = require('./routes/api/thoughts/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);


// Connect to database and start server
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.log(`Error connecting to database: ${err}`));