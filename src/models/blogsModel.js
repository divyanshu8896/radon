const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const BlogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        required: true
    },
    author_id: {
        required: true,
        type: ObjectId,
        ref: "Author"
    },
    tags: [string],
    category: {
        type: string,
        required: true
    },
    subcategory: [string],
    isDeleted: {
        type: boolean,
        default: false
    },
    isPublished: {
        type: boolean,
        default: false
    }

}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogsSchema) 
