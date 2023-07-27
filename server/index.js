// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Parse JSON in request bodies
app.use(express.json());

// Connect to MongoDB
const dbURI = 'OUR_MONGODB_URI'; // We will Replace this with our MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    app.listen(4000, () => {
      console.log('Server running on port 4000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
