const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: String,
    localation: String,
    cuisine: String,
    available_slots: [String],
    reviws: [
        {
            user: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        }
    ]
})