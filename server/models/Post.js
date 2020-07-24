'use strict'

const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    title: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post', postSchema)
