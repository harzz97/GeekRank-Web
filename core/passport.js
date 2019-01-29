var LocalStrategy = require("passport-local")
var passport = require("passport")
var User = require("../api/models/User")
var bcrypt = require("bcrypt")
passport.use('login', new LocalStrategy(
    function (username, password, done) {
        User.findOne({
            where: {
                username: username
            }
        }).then((user) => {
            if (user != null) {
                const valid = bcrypt.compare(password, user.password).then((res) => {
                    if (!res) {
                        return done(null, false, {
                            message: "Invalid username or password"
                        })
                    }
                    if (res) {
                        return done(null, user)
                    }
                })
            } else {
                return done(null, false, {
                    message: "Invalid username or password"
                })
            }
        }).catch(err => {
            console.log("Passport", err)
            return done(err)
        })
    }))

passport.serializeUser(function (user, done) {
    console.log(user, "SER")
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    console.log(username, "DES")
    User.findOne({
        where: {
            username
        }
    }).then((user) => {
        return done(null, user);
    }).catch(err => {
        done(err);
    });
});