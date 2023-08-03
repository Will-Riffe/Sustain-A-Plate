// seedDB.js

const mongoose = require("mongoose");
const User = require("./models/user");
const FoodListing = require("./models/foodListing");
const Transaction = require("./models/transaction");
const bcrypt = require("bcryptjs");

const db = "your mongodb url here";

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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
      donorId: "userID of donor",
      foodItem: "Apples",
      description: "A bag of apples",
      expiryDate: new Date(),
      quantity: 10,
    },
  ];

  const transactions = [
    {
      donorId: "userID of donor",
      recipientId: "userID of recipient",
      foodItemId: "foodID of food item",
    },
  ];

  await User.insertMany(users);
  await FoodListing.insertMany(foodListings);
  await Transaction.insertMany(transactions);

  console.log("Database seeded!");
}

seedDB().then(() => mongoose.connection.close());
