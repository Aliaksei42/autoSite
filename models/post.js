// post.js

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
