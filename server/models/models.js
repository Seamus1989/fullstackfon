const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const postSchema = new Schema({
  content: String,
  likes: Number,
  userName: String,
  comments: [Object]
});

const Posts = mongoose.model('posts', postSchema);

module.exports = {
  Posts
};
