const USUARIO = require('../models/Usuario');

exports.user_login = function(req, res){
    user = {
        id: req.body.id,
        password: req.body.password
    }
    USUARIO.findOne(user)
        .then(doc => {
            if(doc){
                return res.send({code: 1, doc: doc})
            }
            return res.send({code: 0, msg: "Usuario não existe"})
        })
        .catch(err => {
            throw err
        })
}

exports.autenticar = function(req, res){
    if(req.cookies.auth){
        return res.send({code: 1, auth: true})
    }
    return res.send({code: 0, auth: false})
}