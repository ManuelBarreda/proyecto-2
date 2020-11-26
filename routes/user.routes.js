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

module.exports = router
