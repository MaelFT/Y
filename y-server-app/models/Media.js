const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  type: { type: String, required: true },
  filePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
