// index.js
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

// import jwt authentication middleware
const { authMiddleware } = require("./utils/auth");
// Connect to MongoDB using connection.js
require("./config/connection");
// Import user routes from userRoutes.js
const userRoutes = require("./utils/userRoutes");
const { typeDefs, resolvers } = require("./schemas"); // Updated the import path
const db = require("./config/connection");

const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "../client/build"));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Parse JSON in request bodies
app.use(express.json());

app.use(userRoutes);

// This function will start the ApolloServer and apply middleware.
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Start the server after successful database connection
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

// Call the function to start the server and apply middleware
startServer();
