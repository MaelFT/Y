const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repost' }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
