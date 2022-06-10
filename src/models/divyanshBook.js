const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const BookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "divyanshAuthor"
    },
    price: Number,
    ratings: Number,
    Publisher_id: {
        type: ObjectId,
        ref: "divyanshPublisher"
    },   
    
}, { timestamps: true });

module.exports = mongoose.model('divyanshuBook', BookSchema)