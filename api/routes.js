var express = require('express')
var account = require('./routes/account')
var router = new express.Router()

router.use('/account',account)

router.use('/*', function(req, res) {
    res.status(404).send("File not found.")
})

module.exports = router