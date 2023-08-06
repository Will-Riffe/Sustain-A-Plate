const mongoose = require('mongoose');
const Transaction = require('./transaction');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  transactions: [Transaction.schema],
  location: String,
});

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const bostonCity = 10;
    this.password = await bcrypt.hash(this.password, bostonCity);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
