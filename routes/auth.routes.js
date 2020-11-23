const express = require('express')
const router = express.Router()
const bcryptjs = require("bcryptjs")
const bcryptjsSalt = 10

const User = require('./../models/user.model')
const app = require('../app')


//SIGN UP - GET
router.get('/signup', (req, res) => res.render('profile/signup'))

//SIGN UP - POST
router.post('/signup', (req, res) => {

    const { username, password, email, name, lastName, phoneNumber } = req.body

    if (username.length === 0 || password.length === 0 || email.length === 0 || name.length === 0 || lastName.length === 0 || phoneNumber.length === 0) {
        res.render('/', { errorMsg: 'Rellena todos los campos' })
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
                // console.log(User)
                .then(() => res.render('profile/profile', { successMsg: 'Registro completado' }))
                .catch(err => console.log(err))
        })
})

//LOGIN - GET
router.get('/login', (req, res) => res.render('profile/login'))

//LOGIN - POST
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

            req.session.currentUser = theUser               // inicio de sesión
            res.render('profile/profile', { successMsg: '¡Bienvenid@,' + theUser.username + '!' })
        })
        .catch(err => console.log(err))
})

//SIGN OUT - GET
router.get('/signout', (req, res) => req.session.destroy((err) => res.redirect("/")))

//PROFILE
router.get('/profile/:id', (req, res) => {
    const userId = req.params.id
    User
        .findById(userId)
        .then(theUser => res.render('profile/profile', theUser))
        .catch(err => console.log(err))
    
})

//ALL TRAVEL
router.get('/all-travels', (req, res) => res.render('travel/all-travels'))

//NEW-TRAVEL
router.get('/new-travel', (req, res) => res.render('travel/new-travel'))

//TRAVEL DETAIL
router.get('/travel-details', (req, res) => res.render('travel/travel-details'))


/* ---------- RUTAS PROTEGIDAS DEBAJO DEL ROUTER.GET ---------- */
// custom middleware for session check
router.use((req, res, next) => req.session.currentUser ? next() : res.render('profile/login', { errorMsg: 'Zona restringida' }))
// todas las rutas a continuación serán privadas
router.get('/profile', (req, res) => res.render('profile/profile', req.session.currentUser))

module.exports = router
