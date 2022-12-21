const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        require:'This fild is required',
    },
    image:{
        type: String,
        require:'This fild is required',
    }

})
module.exports = mongoose.model('Category',CategorySchema)