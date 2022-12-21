const mongoose = require('mongoose')
// require('dotenv').config()

mongoose.connect('mongodb://localhost/node_food',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("connection mongodb successfull")
})

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('Connected')
})
//models
require('./Category')
require('./Recipe')

// console.log(process.env.MONGODB_URI)