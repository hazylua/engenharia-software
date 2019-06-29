const mongoose = require('mongoose')

const ItensSchema = new mongoose.Schema({
    slug:{type: String, required:true},
    localizacao: {type: String, required: true},
    qtd: {type: Number, require: true}
})

module.exports = mongoose.model("Item", ItensSchema);