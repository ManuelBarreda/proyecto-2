const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'User'       
    },
    date: Date, // Como funciona? hacemos por un lado hora y por otro dias?
    availablePlaces: Number,
    originCity: String,
    destinationCity: String,
    price: Number
}, {
    timestamps: true
});

// travelSchema.index({ departureLocation: '2dsphere' }) // Como llamo a las dos locations??
// travelSchema.index({ arrivalLocation: '2dsphere' })
const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;