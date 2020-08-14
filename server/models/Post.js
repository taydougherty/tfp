'use strict'

const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter Blog Title"]
    },
    body: {
        type: String,
        required: [true, "Please enter Blog Post"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post', postSchema)
