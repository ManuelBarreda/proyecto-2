const express = require('express')
const router = express.Router()

const ObjectId = require('mongodb').ObjectId
const Travel = require('./../models/travel.model')

// API ALL TRAVELS - GET
router.get('/travels', (req, res, next) => {

    Travel
        .find()
        .then(travels => res.json(travels))
        .catch(err => next(err))
        // .catch(err => new Error(err))
})

// API USER TRAVELS - GET
router.get('/travels/user-travel', (req, res, next) => {

    let driverID = req.session.currentUser._id

    Travel
        .find({ "driver": ObjectId(driverID)})
        .then(travelByDriver => res.json(travelByDriver))
        .catch(err => next(err))
})

module.exports = router