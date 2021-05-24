//npm install express body-parser sequelize mysql2
const express = require('express')
const bodyParser = require('body-parser')//transforma o body da requisicao em varios formatos


const roteador = require('./rotas')

const app = express()
app.use(bodyParser.json())

app.use('/rotas', roteador)

app.listen(3000, () => console.log("api rodou"))