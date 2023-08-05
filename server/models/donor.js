const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  donorname: { type: String, unique: true, required: true },
  foodListings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodListing",
      required: false,
      default: [],
    },
  ],

  location: String,
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
