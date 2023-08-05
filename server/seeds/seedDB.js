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
  try {
    await User.deleteMany({});
    await FoodListing.deleteMany({});
    await Transaction.deleteMany({});

    const hashedPassword = await bcrypt.hash("password", 10);

    const user = await User.create({
      username: "user1",
      email: "user1@example.com",
      password: hashedPassword,
      location: "New York",
    });

    const donorId = user._id;

    const foodListing = await FoodListing.create({
      donorId: donorId,
      foodItem: "Apples",
      description: "A bag of apples",
      expiryDate: new Date(2025, 7, 6),
      quantity: 10,
    });

    const foodItemId = foodListing._id;

    const recipientId = user._id;

    const transaction = {
      donorId: donorId,
      recipientId: recipientId,
      foodItemId: foodItemId,
    };

    await Transaction.create(transaction);

    console.log("Database seeded!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
