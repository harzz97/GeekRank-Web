var express = require('express')
var controller = require('../controllers/UserController')
var router = new express.Router()

router.post('/login', controller.registerUser)
router.post('/register',controller.registerUser)

module.exports = router