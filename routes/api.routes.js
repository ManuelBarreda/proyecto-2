const express = require('express')
const router = express.Router()

const Travel = require('./../models/travel.model')

// Endpoints
router.get('/travels', (req, res) => {

    Travel
        .find()
        .then(travels => res.json(travels))
        .catch(err => next(err))
})

module.exports = router