const express = require('express')
const router = express.Router()
const passport = require('passport')

const Travel = require('./../models/travel.model')

const ensureAuthenticated = (req, res, next) => req.session.currentUser ? next() : res.render('profile/login', { errorMsg: 'Zona restringida, inicia sesión' })

// ALL TRAVEL - GET
router.get('/all-travels', (req, res) => res.render('travel/all-travels'))

// TRAVEL DETAIL - GET
router.get('/travel-details/:travel_id', ensureAuthenticated, (req, res) => {

    const travelId = req.params.travel_id

    Travel
    .findById(travelId)
    .populate("driver")
    .then(theTravel => res.render('travel/travel-details', theTravel))
    .catch(err => new Error(err))  
})

// NEW-TRAVEL - GET
router.get('/new-travel', ensureAuthenticated, (req, res) => res.render('travel/new-travel'))

// NEW-TRAVEL - POST
router.post('/new-travel', ensureAuthenticated, (req, res, next) => {

    const driver = req.session.currentUser._id
    const { date, availablePlaces, originCity, destinationCity, price} = req.body

    if (date === "" || availablePlaces === "" || originCity === "" || destinationCity === "" || price === "") {
        res.render("travel/new-travel", { errorMsg: "Rellena todos los campos" })
        return
    }

    Travel
        .create({ driver, date, availablePlaces, originCity, destinationCity, price})
        .then(() => res.render("travel/all-travels"))
        .catch(err => new Error(err))
})


// DELETE TRAVEL - GET
router.get('/delete/:travel_id', ensureAuthenticated, (req, res) => {
    
    const travelID = req.params.travel_id
    
    Travel
    .findByIdAndDelete(travelID)
    .then(() => res.render('profile/profile'))
    .catch(err => new Error(err))
})


// EDIT-TRAVEL - GET
router.get('/edit-travel/:travel_id', ensureAuthenticated, (req, res) => {

    const travelId = req.params.travel_id
    
    Travel
    .findById(travelId)
    .then(theTravel => res.render('travel/edit-travel', theTravel))
    .catch(err => new Error(err))
    
})

// EDIT-TRAVEL - POST
router.post('/edit-travel/:travel_id', ensureAuthenticated, (req, res, next) => {

    const travelId = req.params.travel_id
    const { date, availablePlaces, originCity, destinationCity, price} = req.body

    if (date === "" || availablePlaces === "" || originCity === "" || destinationCity === "" || price === "") {
        res.render("travel/edit-travel", { errorMsg: "Rellena todos los campos" })
        return
    }

    Travel
        .findByIdAndUpdate(travelId, { date, availablePlaces, originCity, destinationCity, price})
        .then(() => res.render("profile/profile"))
        .catch(err => new Error(err))
})

module.exports = router