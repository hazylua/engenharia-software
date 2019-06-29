const   express = require('express'),
        bodyParser  = require('body-parser'),
        mongoose = require('mongoose'),
        cors    = require('cors'),
        cp  = require('cookie-parser'),
        U   = require('./models/Usuario'),
        app = express();

mongoose.connect("mongodb://jvsc:skylane07@ds133137.mlab.com:33137/puffin", { useNewUrlParser: true })

const UserRotas = require('./router/usuario')
const ItemRotas = require('./router/iten')


app.use(cors())
app.use(cp())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/usuario", UserRotas)
app.use("/item", ItemRotas)
app.listen("8000", function(){
    console.log("Server is listening")
})

