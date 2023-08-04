const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donor",
    required: true,
  },
  foodItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodListing",
    required: true,
  },
  itemName: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  qty: { type: Number, required: true },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
