const express = require('express')
const router = express.Router()

// BASE - GET
router.get('/', (req, res) => res.render('index'))

module.exports = router