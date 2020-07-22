'use strict'

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
    author: {}
})

module.exports = mongoose.model('Post', postSchema)