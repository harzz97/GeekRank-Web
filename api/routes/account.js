var express = require('express')
var controller = require('../controllers/UserController')
var router = new express.Router()
var passport = require("passport")
, LocalStrategy = require('passport-local').Strategy


router.post('/login', passport.authenticate('login',{
    successRedirect:'/dashboard',
    failureRedirect:"/404",
    failureFlash:true,
  }))
router.post('/register',controller.registerUser)

module.exports = router