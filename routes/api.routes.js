const express = require('express')
const router = express.Router()

const ObjectId = require('mongodb').ObjectId

const Travel = require('./../models/travel.model')

// Endpoints

router.get('/travels', (req, res, next) => {

    Travel
        .find()
        .then(travels => res.json(travels))
        .catch(err => next(err))
})



router.get('/travels/user-travel', (req, res, next) => {

    let driverID = req.session.currentUser._id

    Travel
        .find({ "driver": ObjectId(driverID)})
        .then(travelByDriver => res.json(travelByDriver))
        .catch(err => next(err))
})



module.exports = router