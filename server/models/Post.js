'use strict'

const mongoose = require('mongoose');
const { db } = require('./User');

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model('Post', postSchema)




// db.posts.insert({
//     title: 'Test Post',
//     body: 'Body of post one',
//     author: 'TestUser',
//     date: Date()
// })
