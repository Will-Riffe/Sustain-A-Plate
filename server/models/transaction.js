const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new mongoose.Schema({
  claimDate: {
    type: Date,
    default: Date.now
  },
  foodListings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'FoodListing'
    }
  ]
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
