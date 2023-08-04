const mongoose = require('mongoose');

const foodListingSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    description: { type: String },
});

const donorSchema = new mongoose.Schema({
    donorname: { type: String, unique: true, required: true },
    location: String,
});

const FoodListing = mongoose.model('storeInventory', foodListingSchema);
const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor, FoodListing;