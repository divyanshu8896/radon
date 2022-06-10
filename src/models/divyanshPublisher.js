const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema( {
  PublisherName: String,
    headQuarter: String 
}, { timestamps: true });

module.exports = mongoose.model('divyanshPublisher',PublisherSchema)