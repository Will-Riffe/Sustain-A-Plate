const mongoose = require('mongoose');

const foodListingSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor', required: true },
  donorname: { type: String, ref: 'Donor', required: false },
  foodItem: { type: String, required: true },
  description: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  quantity: { type: Number, required: true },
  isClaimed: { type: Boolean, default: false },
});

const FoodListing = mongoose.model('FoodListing', foodListingSchema);

module.exports = FoodListing;
