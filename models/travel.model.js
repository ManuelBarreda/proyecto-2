const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'User'       
    },
    date: Date,
    availablePlaces: Number,
    originCity: String,
    destinationCity: String,
    price: Number
}, {
    timestamps: true
});

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;