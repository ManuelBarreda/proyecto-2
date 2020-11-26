const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcryptjs = require("bcryptjs")
const bcryptjsSalt = 10

const User = require('./../models/user.model')

// SIGN UP - GET
router.get('/signup', (req, res) => res.render('profile/signup'))

// SIGN UP - POST
router.post('/signup', (req, res) => {

    const { username, password, email, name, lastName, phoneNumber } = req.body

    if (username.length === 0 || password.length === 0 || email.length === 0 || name.length === 0 || lastName.length === 0 || phoneNumber.length === 0) {
        res.render('profile/signup', { errorMsg: 'Rellena todos los campos' })
        return
    }

    User
        .findOne({ username: username })
        .then(theUser => {
            if (theUser) {
                res.render('profile/signup', { errorMsg: 'Usuario ya registrado' })
                return
            }

            const salt = bcryptjs.genSaltSync(bcryptjsSalt)
            const hashPass = bcryptjs.hashSync(password, salt)

            User
                .create({ username, password: hashPass, email, name, lastName, phoneNumber })
                .then((newUser) => {
                    req.session.currentUser = newUser
                    res.redirect(`/user/profile/${newUser.id}`)
                })
                .catch(err => new Error(err))
        })
        .catch(err => new Error(err))
})

// LOGIN - GET
router.get('/login', (req, res) => res.render('profile/login'))

// LOGIN - POST
router.post('/login', (req, res, next) => {

    const { username, password } = req.body

    if (username === "" || password === "") {
        res.render("profile/login", { errorMsg: "Rellena todos los campos" })
        return
    }

    User
        .findOne({ username: username })
        .then(theUser => {

            if (!theUser) {
                res.render("profile/login", { errorMsg: "Usuario no reconocido" })
                return
            }

            if (!bcryptjs.compareSync(password, theUser.password)) {
                res.render("profile/login", { errorMsg: "Contraseña incorrecta" })
                return
            }

            req.session.currentUser = theUser
            res.redirect(`/user/profile/${theUser._id}`)
        })
        .catch(err => new Error(err))
})

// SIGN OUT - GET
router.get('/signout', (req, res) => req.session.destroy((err) => res.redirect("/")))

module.exports = router