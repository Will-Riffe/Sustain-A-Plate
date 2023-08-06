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

    // const donorId = user._id;

    const foodListing = await FoodListing.create(
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Shoprite",
        foodItem: "Apples",
        description: "A bag of apples",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Shoprite",
        foodItem: "Bananas",
        description: "A bag of Bananas",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Shoprite",
        foodItem: "Frozen Pizza",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Shoprite",
        foodItem: "Wings",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Panera",
        foodItem: "Apples",
        description: "A bag of apples",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Panera",
        foodItem: "Bananas",
        description: "A bag of Bananas",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Panera",
        foodItem: "Frozen Pizza",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Panera",
        foodItem: "Wings",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Dunkin Donuts",
        foodItem: "Apples",
        description: "A bag of apples",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Dunkin Donuts",
        foodItem: "Bananas",
        description: "A bag of Bananas",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Dunkin Donuts",
        foodItem: "Frozen Pizza",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Dunkin Donuts",
        foodItem: "Wings",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Wegmans",
        foodItem: "Apples",
        description: "A bag of apples",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Wegmans",
        foodItem: "Bananas",
        description: "A bag of Bananas",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Wegmans",
        foodItem: "Frozen Pizza",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Wegmans",
        foodItem: "Wings",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "McArthur Pub",
        foodItem: "Apples",
        description: "A bag of apples",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "McArthur Pub",
        foodItem: "Bananas",
        description: "A bag of Bananas",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "McArthur Pub",
        foodItem: "Frozen Pizza",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "McArthur Pub",
        foodItem: "Wings",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Berts Cafe",
        foodItem: "Apples",
        description: "A bag of apples",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Berts Cafe",
        foodItem: "Bananas",
        description: "A bag of Bananas",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Berts Cafe",
        foodItem: "Frozen Pizza",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      },
      {
        donorId: "64cd7cead3c47624c798b7c4",
        donorname: "Berts Cafe",
        foodItem: "Wings",
        description: "Frozen Food",
        expiryDate: new Date(2025, 7, 6),
        quantity: 10,
      }
    );

    // const foodItemId = foodListing._id;

    // const recipientId = user._id;

    // const transaction = {
    //   donorId: donorId,
    //   recipientId: recipientId,
    //   foodItemId: foodItemId,
    // };

    // await Transaction.create(transaction);

    console.log("Database seeded!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
