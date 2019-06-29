const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: {type:String, required: true},
    password: {type: String, required: true},
    rank: {type:String, default: 1},
})

module.exports = mongoose.model("User", UserSchema);