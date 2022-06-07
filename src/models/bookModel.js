const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        require: true
    }, 
    authorName: String, 
    tags: [String],

    // prices:{
    // isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type:Number,
        deafault:2021
    },
    totalPages: Number,
    stockAvailable: Boolean
    //sales: {type: Number, default: 10}
}, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users
module.exports = mongoose.model('Book1', bookSchema) 
//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
