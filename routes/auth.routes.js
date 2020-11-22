const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))


// Endpoints


//LOGIN
router.get('/login', (req, res) => res.render('profile/login'))

//SIGN UP

router.get('/signup', (req, res) => res.render('profile/signup'))

//PROFILE

router.get('/profile', (req, res) => res.render('profile/profile'))

//ALL TRAVEL

router.get('/all-travels', (req, res) => res.render('travel/all-travels'))

//NEW-TRAVEL

router.get('/new-travel', (req, res) => res.render('travel/new-travel'))

//TRAVEL DETAIL

router.get('/travel-details', (req, res) => res.render('travel/travel-details'))


module.exports = router
