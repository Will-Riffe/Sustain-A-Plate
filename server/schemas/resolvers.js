const User = require("../models/user");
const FoodListing = require("../models/foodListing");
const Transaction = require("../models/transaction");
const bcrypt = require("bcryptjs");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: () => User.find(),
    foodListings: () => FoodListing.find(),
    transactions: () => Transaction.find(),
  },
  Mutation: {
    registerUser: async (_, { input }) => {
      console.log(input)
      const { username, email, password } = input;
      
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        throw new Error("Username or email already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      const token = signToken(newUser);

      return { token, newUser, message: "User registered successfully" };
    },
    loginUser: async (_, { input }) => {
      const { username, password } = input;

      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid credentials");
      }

      const token = signToken(user);

      return { token, userId: user.id };
    },
    updateUser: async (_, { id, username, email, password }) => {
      if (password) password = await bcrypt.hash(password, 10);
  
      return User.findByIdAndUpdate(
        id,
        { username, email, password },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
