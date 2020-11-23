module.exports = app => {

    // Base URLS
    app.use('/api', require('./api.routes.js'))
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./auth.routes.js'))

}