// seedDB.js

const mongoose = require("mongoose");
const User = require("../models/user");
const FoodListing = require("../models/foodListing");
const Transaction = require("../models/transaction");
const bcrypt = require("bcryptjs");

const db = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sustainaplate";

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDB() {
  await User.deleteMany({});
  await FoodListing.deleteMany({});
  await Transaction.deleteMany({});

  const hashedPassword = await bcrypt.hash("password", 10);

  const users = [
    {
      username: "user1",
      email: "user1@example.com",
      password: hashedPassword,
      location: "New York",
    },
  ];

  const foodListings = [
    {
      donorId: "61d634706a98a61edd42bf45",
      foodItem: "Apples",
      description: "A bag of apples",
      expiryDate: new Date(),
      quantity: 10,
    },
  ];

  const transactions = [
    {
      donorId: "61d634706a98a61edd42bf45",
      recipientId: "61d634706a98a61edd42bf45",
      foodItemId: "61d634706a98a61edd42bf45",
    },
  ];

  await User.insertMany(users);
  await FoodListing.insertMany(foodListings);
  await Transaction.insertMany(transactions);

  console.log("Database seeded!");
}

seedDB().then(() => mongoose.connection.close());
