const mongoose = require('mongoose');

const followerRelationSchema = new mongoose.Schema({
  follower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  following: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

const FollowerRelation = mongoose.model('FollowerRelation', followerRelationSchema);

module.exports = FollowerRelation;
