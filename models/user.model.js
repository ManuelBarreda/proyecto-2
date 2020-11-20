const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true, // Mínimo una letra, un número y tener mínimo seis caracteres
        match: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
    },
    email: {
        type: String,
        required: true, // algo@algo.algo
        match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true, // Todos estos formatos: (123) 456-7890 -- (123)456-7890 -- 123-456-7890 -- 123.456.7890 -- 1234567890 -- +31636363634
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User