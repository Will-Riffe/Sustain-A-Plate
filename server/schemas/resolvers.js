const User = require("../models/user");
const FoodListing = require("../models/foodListing");
const Transaction = require("../models/transaction");
const bcrypt = require("bcryptjs");
const { signToken } = require("../utils/auth");

const resolvers = {
  // Query: {
  //   allFoodListings: async () => {
  //     return await FoodListing.find();
  //   },
  //   foodListings: async (parent, { donorId, foodItem, isClaimed }) => {
  //     const params = {};
  //     if (donorId) {
  //       params.donorId = donorId;
  //     }
  //     if (foodItem) {
  //       params.foodItem = foodItem;
  //     }
  //     if (isClaimed) {
  //       params.isClaimed = isClaimed;
  //     }
  //     return await FoodListing.find(params);
  //   },
  //   user: async (parent, args, context) => {
  //     if (context.user) {
  //       return User.findById(context.user._id);
  //     }
  //   },
  //   transaction: async (
  //     parent,
  //     { donorId, recipientId, foodItemId, timestamp }
  //   ) => {
  //     const params = {};
  //     if (donorId) {
  //       params.donorId = donorId;
  //     }
  //     if (recipientId) {
  //       params.recipientId = recipientId;
  //     }
  //     if (foodItemId) {
  //       params.foodItemId = foodItemId;
  //     }
  //     if (timestamp) {
  //       params.timestamp = timestamp;
  //     }
  //     return await Transaction.find(params);
  //   },
  // },

  Mutation: {
    registerUser: async (_, { input }) => {
      console.log(input)
      try {
        const { username, email, password } = input;
      
        // Check if the username or email already exists
        const existingUser = await User.findOne({
          $or: [{ username }, { email }],
        });
        if (existingUser) {
          throw new Error("Username or email already exists");
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });

        await newUser.save();
        const token = signToken(newUser);

        return { token, newUser, message: "User registered successfully" };
      } catch (err) {
        throw new Error(err);
      }
    },
    loginUser: async (_, { input }) => {
      try {
        const { username, password } = input;

        // Check if the user exists in the database
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("User not found");
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        // If the password is valid, create a JWT token and return it to the client for authentication
        const token = signToken(user);

        return { token, userId: user.id };
      } catch (err) {
        throw new Error("Error during user login");
      }
    },
  },
};

module.exports = resolvers;
