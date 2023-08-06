const mongoose = require('mongoose');
const Transaction = require('./transaction');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  transactions: [Transaction.schema],
  location: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
