const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('./../models/user.model')

const ensureAuthenticated = ((req, res, next) => req.session.currentUser ? next() : res.render('profile/login', { errorMsg: 'Zona restringida, inicia sesión' }))

//PROFILE UNLOGGED - GET
router.get('/profile', (req, res) => res.render('profile/login', { errorMsg: 'Zona restringida, inicia sesión' }))

//PROFILE LOGGED - GET
router.get('/profile/:user_id', ensureAuthenticated, (req, res) => {
    const userId = req.params.user_id
    console.log(userId)
    User
    .findById(userId)
    .then(theUser => res.render('profile/profile', theUser))
    .catch(err => console.log(err))
    
})

// EDIT-PROFILE GET

router.get('/edit-profile/:user_id', ensureAuthenticated, (req, res) => {

    const userID = req.params.user_id

    User
        .findById(userID)
        .then(theUser => res.render('profile/edit-profile', theUser))
        .catch(err => console.log(err))

})

// EDIT-PROFILE POST


router.post('/edit-profile/:user_id', ensureAuthenticated, (req, res) => {

    const userID = req.params.user_id

    const { username, password, email, name, lastName, phoneNumber } = req.body

    User
        .findByIdAndUpdate(userID, { username, password, email, name, lastName, phoneNumber })
        .then(theUser => res.render('profile/edit-profile', theUser))
        .then(() => res.redirect(`/user/profile/${userID}`))
        .catch(err => console.log(err))
})

module.exports = router
