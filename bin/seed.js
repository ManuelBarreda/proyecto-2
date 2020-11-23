const mongoose = require('mongoose');
const User = require('../models/user.model');
const Travel = require('../models/travel.model');
const { getMaxListeners } = require('../models/user.model');

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
    .then(usersCreated => {
        console.log(`Created ${usersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))



// const travels = [
//     {
//         driver: {
//             username: "Mario_diaz",
//             password: "123",
//             email: "mario@gmail.com",
//             name: "Mario",
//             lastName: "Díaz",
//             phoneNumber: 689524578,
//         },
//         departure: new Date("December 17, 2020 18:00:00"),
//         availablePlaces: 3,
//         departureLocation: {
//             type: 'Point',
//             coordinates: [44.2125]
//         },
//         arrivalLocation: {
//             type: 'Point',
//             coordinates: [-3.2125]
//         }
//     }
// ]


// Promise.all(travels.map(travels => User.create(travels.driver).then(driver => driver.username)))
    
//     .then(() => travels.map(travel => User.findOne({ name: travel.driver.username }).then(users => Object.assign({}, travel, { driver: travels._id }))))

//     .then(findUsers => Promise.all(findUsers).then(travels => travels.map(travel => Travel.create(travel))))

//     .then(savedTravels => Promise.all(savedTravels).then(travel => travel.forEach(travel => console.log(`Viaje de ${travel.driver} creado`))).then(() => mongoose.connection.close()))
   
//     .catch(error => console.log('Error: ', error))
