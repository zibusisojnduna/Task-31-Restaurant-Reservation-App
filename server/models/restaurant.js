const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    cuisine: String,
    availableSlots: [ Date],
})

module.exports = mongoose.model("Restaurant", restaurantSchema)