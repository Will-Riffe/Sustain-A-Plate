const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type FoodListing {
    _id: ID!
    donorId: ID!
    foodItem: String!
    description: String!
    expiryDate: String!
    quantity: Int!
    isClaimed: Boolean!
  }

  type Transaction {
    _id: ID!
    donorId: ID!
    recipientId: ID!
    foodItemId: ID!
    timestamp: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input UpdateUserInput {
    id: ID!
    username: String
    email: String
    password: String
  }

  type AuthData {
    token: String!
    userId: ID!
  }

  type Query {
    users: [User]
    foodListings: [FoodListing]
    transactions: [Transaction]
  }

  type Mutation {
    registerUser(input: RegisterInput): AuthData
    loginUser(input: LoginInput): AuthData
    updateUser(input: UpdateUserInput): User
  }
`;

module.exports = typeDefs;
