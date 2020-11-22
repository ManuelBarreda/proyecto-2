const mongoose = require('mongoose');
const User = require('../models/user.model');

const dbName = 'proyecto-2'
mongoose.connect(`mongodb://localhost/${dbName}`);

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
    .then(usersCreated => {
        console.log(`Created ${usersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))