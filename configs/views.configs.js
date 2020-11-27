const path = require('path')
const express = require('express')
const hbs = require('hbs')

module.exports = app => {

    hbs.registerPartials(__dirname + '/../views/partials')
    app.set('views', path.join(__dirname, '..', 'views'))
    app.set('view engine', 'hbs')
    app.use(express.static(path.join(__dirname, '..', 'public')))
    
}