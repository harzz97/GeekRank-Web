var express = require("express")
var bcrypt = require("bcrypt")
var sanitizer = require("sanitizer")
var dbHelper = require("../../core/DatabaseHelper")
var User = require("../models/User")





/* register newUSer */
exports.registerUser = function registerUser(req, res) {
    dbHelper.query("select count(*) from users").then((val) => {
        User.findOne({
            where: {
                userName: sanitizer.sanitize(req.body.userName)
            }
        }).then((value) => {
            console.log("SYNC VALUE", value)
            if (value == null) {
                addUserToDB(req.body, res)
            } else {
                res.json({
                    success: false
                })
            }
        }).catch(err => {
            res.json({
                success: false
            })
    
        })
    }).catch(err => {
        console.log("ERR ", err)
        addUserToDB(req.body, res)
    })



}

function addUserToDB(body, res) {
    bcrypt.hash(sanitizer.sanitize(body.password), 10, (err, hash) => {
        User.sync().then(() => {
            return User.create({
                userName: sanitizer.sanitize(body.userName).toLowerCase(),
                email: sanitizer.sanitize(body.email).toLowerCase(),
                password: hash
            })
        })
    })
    res.json({
        success: true
    })
}