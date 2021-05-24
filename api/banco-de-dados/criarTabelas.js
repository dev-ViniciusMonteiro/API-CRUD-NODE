const ModeloTabela = require('../rotas/ModeloTabela')


ModeloTabela.sync().then(()=>{
    console.log("tabela criada com sucesso")
}).catch(console.log)

