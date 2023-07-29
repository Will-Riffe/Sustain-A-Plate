// util/userRoutes.js
const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/user");
const { signToken } = require("./auth");

const router = express.Router();

// Registration route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
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

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error during user registration:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // If the password is valid, create and send a JWT token to the client for authentication
    // We'll implement this part later
    const token = signToken(user);

    return res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("Error during user login:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
