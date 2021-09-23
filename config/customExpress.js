//configurando o express e fazendo mudanças nele

const express = require('express') //importando servidor
const consign = require('consign') //importando consign modulo que lida com rotas
const bodyParser = require('body-parser') //importando body-parser modulo q entende o body da requisicao POST

module.exports = () =>{ //exportando essa função
    const app = express() //criar variavel app
    
    app.use(bodyParser.urlencoded({extended: true})) //use é do express //assim estamos recebendo dados passados pelo post
    app.use(bodyParser.json())
    consign()               //configurar variavel app
        .include('controllers')
        .into(app)

    return app
}

    