const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

module.exports = Hashtag;
