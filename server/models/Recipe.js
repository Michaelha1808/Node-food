const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        require:'This fild is required',
    },
    description:{
        type: String,
        require:'This fild is required',
    },
    email:{
        type: String,
        require:'This fild is required',
    },
    ingredients:{
        type: Array,
        require:'This fild is required',
    },
    category:{
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        require:'This fild is required',
    },
    image:{
        type: String,
        require:'This fild is required',
    },
})
recipeSchema.index({ name: 'text', description:'text' })
// wildcard indexing
// recipeSchema.index({"$**":'text'})

module.exports = mongoose.model('Recipe',recipeSchema)