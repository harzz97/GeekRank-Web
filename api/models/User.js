const sequalize = require("sequelize")
const helper = require("../../core/DatabaseHelper")
const User = helper.define('user', {
    username: {
        type: sequalize.STRING
    },
    email :{
        type:sequalize.STRING
    },
    password:{
        type:sequalize.STRING
    }
})
module.exports = User