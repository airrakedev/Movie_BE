const express = require('express')
const Router = express.Router()

// ADMIN
Router.use('/admin/v1', require('./admin'))

// GENRES
Router.use('/genres/v1', require('./genres'))

// MOVIES
Router.use('/movie/v1', require('./movies'))

// RENTALS
Router.use('/purchase/v1', require('./purchase'))

// CUSTOMER
Router.use('/customer/v1', require('./customer'))

module.exports = Router