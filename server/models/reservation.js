const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant"},
    reservationTime: Date,
    status: { type: String, default: "pending"}
})

module.exports = mongoose.model("Reservation", reservationSchema)