const roteador = require('express').Router()

roteador.get('/',async (req,res)=>{//listar
    res.send("foi")
})

module.exports = roteador