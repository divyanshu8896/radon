const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"]
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema) 

