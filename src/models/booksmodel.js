const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    Name:String,
       
    author_id:{
        type:Number,
        require:true
    },   
    price:Number,
    ratings:Number,
}, { timestamps: true });


module.exports = mongoose.model('book2', bookSchema)