const ITEM = require('../models/Itens')

exports.busca_itens = function(req, res){
    ITEM.find({})
        .then( docs => {
            return res.send({code: 1, docs: docs})
        })
        .catch(err => {
            console.log(err)
            return res.send({code: 0, msg:"Erro interno"})
        })
}