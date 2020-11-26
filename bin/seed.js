const mongoose = require('mongoose');
const User = require('../models/user.model');
const Travel = require('../models/travel.model');

const dbName = 'proyecto-2'
mongoose.connect(`mongodb://localhost/${dbName}`);

User.collection.drop()
Travel.collection.drop()

const users = [
    {
        username: "Prueba1",
        password: "123456789Ironhack1",
        email: "hola@hola.com",
        name: "Prueba1",
        lastName: "Ironhack",
        phoneNumber: 659104400
    },
    {
        username: "Prueba2",
        password: "123456789Ironhack2",
        email: "hola@hola.com",
        name: "Prueba2",
        lastName: "Ironhack",
        phoneNumber: 659104400
    },
    {
        username: "Prueba3",
        password: "123456789Ironhack3",
        email: "hola@hola.com",
        name: "Prueba3",
        lastName: "Ironhack",
        phoneNumber: 659104400
    }
]

User
    .create(users)
    .then(() => mongoose.connection.close())
    .catch(err => console.log('Hubo un error,', err))