const sequalize = require("sequelize")
const DatabaseHelper = new sequalize("GeekRank", 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage:'./GeekRank.sqlite'
})

module.exports = DatabaseHelper;