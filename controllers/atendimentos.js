//controlar rotas
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    //rota get
    app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos e esta realizando um GET')) 

    app.post('/atendimentos',(req, res) => {
            const atendimento = req.body

            Atendimento.adiciona(atendimento)
            res.send('Post atendimento')
            
    }) //outra rota post
}   