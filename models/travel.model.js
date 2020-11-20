const mongoose = require("mongoose"); //PREGUNTAR A PROJECT OWNER
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    driver: [{
        type: Schema.Types.ObjectId,
        ref: 'User'       // nombre del modelo asociado
    }],
    departure: Date, // Como funciona? hacemos por un lado hora y por otro dias?
    availablePlaces: Number,
    departureLocation: {                 // Como hacemos esto?
        type: {
            type: String
        },
        coordinates: [Number]
    },
    arrivalLocation: {                 // Como hacemos esto?
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
});

travelSchema.index({ location: '2dsphere' }) // Como llamo a las dos locations??

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;

//PREGUNTAR A PROJECT OWNER