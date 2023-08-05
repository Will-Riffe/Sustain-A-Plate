// schemas.js

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Donor {
    _id: ID!
    donorname: String!
    foodListing: FoodListing
  }

  input createDonorInput {
    donorname: String!
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

  input CreateFoodListingInput {
    donorId: ID!
    foodItem: String!
    description: String!
    expiryDate: String!
    quantity: Int!
  }

  input UpdateFoodListingInput {
    id: ID!
    foodItem: String
    description: String
    expiryDate: String
    quantity: Int
    isClaimed: Boolean
  }

  type AuthData {
    token: String!
    userId: ID!
  }

  type Query {
    user(id: ID!, username: String): User
    users: [User]
    donors: [Donor]
    foodListings: [FoodListing]
    transactions: [Transaction]
    foodListing(id: ID!): FoodListing
    foodListingsByDonorId(donorId: String!): [FoodListing]
    # foodListingsByDonorName(donorname: String!): [FoodListing]
  }

  type Mutation {
    registerUser(input: RegisterInput): AuthData
    loginUser(input: LoginInput): AuthData
    updateUser(input: UpdateUserInput): User
    createFoodListing(input: CreateFoodListingInput): FoodListing
    updateFoodListing(input: UpdateFoodListingInput): FoodListing
    deleteFoodListing(id: ID!): FoodListing
    createNewDonor(input: createDonorInput): Donor
  }
`;

module.exports = typeDefs;
