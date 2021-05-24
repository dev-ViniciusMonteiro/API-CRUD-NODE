const roteador = require('express').Router()

roteador.get('/',async (req,res)=>{//listar
    res.send("foi")
})
//alterando pra ver
console.log("foi")
module.exports = roteador