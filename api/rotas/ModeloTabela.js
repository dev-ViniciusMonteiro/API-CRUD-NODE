const sequalize = require('sequelize')
const instancia = require('../banco-de-dados')

const colunas ={
    empresa: {
        type: sequalize.STRING,
        allowNull: false
    },email: {
        type: sequalize.STRING,
        allowNull: false
    },categoria: {
        type: sequalize.ENUM('racao','brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'exemplo',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas , opcoes)