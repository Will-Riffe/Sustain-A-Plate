const User = require("../models/user");
const FoodListing = require("../models/foodListing");
const Transaction = require("../models/transaction");
const Donor = require("../models/donor");
const bcrypt = require("bcryptjs");
const { signToken } = require("../utils/auth");
const { ObjectId } = require("mongodb");
// const { formatDate } = require('../utils/date');

const resolvers = {
  Query: {
    users: async () => User.find(),
    user: async (_, { id }) => User.findById(id),
    foodListings: async () => FoodListing.find(),
    transactions: async () => Transaction.find(),
    foodListing: async (_, { id }) => FoodListing.findById(id),
    donors: async () => Donor.find(),
    foodListingsByDonorId: async (_, { donorId }) => {
      console.log(donorId);
      let data = await FoodListing.find({ donorId: new ObjectId(donorId) });
      console.log(data);
      return data || [];
    },
    foodListingsByDonorName: async (_, { donorname }) => {
      console.log(donorname);
      let data = await FoodListing.find( {donorname: donorname} );
      console.log(data);
      return data || [];
    },
  },

  Mutation: {
    registerUser: async (_, { input }) => {
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
        throw new Error("Invalid credentials");
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log({user, isPasswordValid, username, password})
      if (!isPasswordValid ) {
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

    createNewDonor: async (_, { input }) => {
      const { donorname } = input;
      const newDonor = new Donor({ donorname });

      await newDonor.save();
      return newDonor;
    },

    createFoodListing: async (_, { input }) => {
      const { donorId, donorname, foodItem, description, expiryDate, quantity } = input;
      // const expiryDateFormat = formatDate(expiryDate, "MM-dd-yy");
      const newFoodListing = new FoodListing({
        donorId,
        donorname,
        foodItem,
        description,
        expiryDate,
        quantity,
        isClaimed: false,
      });

      await newFoodListing.save();
      return newFoodListing;
    },

    updateFoodListing: async (_, { input }) => {
      const { id, donorId, donorname, foodItem, description, expiryDate, quantity, isClaimed } =
        input;
      // const expiryDateFormat = formatDate(expiryDate, "MM-dd-yy");
      const updatedFoodListing = await FoodListing.findByIdAndUpdate(
        id,
        {
          donorId,
          donorname,
          foodItem,
          description,
          expiryDate,
          quantity,
          isClaimed,
        },
        { new: true }
      );

      return updatedFoodListing;
    },

    deleteFoodListing: async (_, { id }) => {
      const deletedFoodListing = await FoodListing.findByIdAndDelete(id);
      return deletedFoodListing;
    },
  },
};

module.exports = resolvers;
