// index.js
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas'); // Updated the import path

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

// This function will start the ApolloServer and apply middleware.
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

// Call the function to start the server and apply middleware
startServer();

// Parse JSON in request bodies
app.use(express.json());

// Connect to MongoDB using connection.js
require('./config/connection');

// Import user routes from userRoutes.js
const userRoutes = require('./utils/userRoutes');
app.use(userRoutes);

// Start the server after successful database connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
