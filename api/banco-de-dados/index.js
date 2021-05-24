const sequalize = require('sequelize')
//create database exemplo

const instancia = new sequalize(
    "exemplo",
       "root",
        "admin",
    {
        host: "127.0.0.1",
        dialect: 'mysql'
    }
)

module.exports = instancia