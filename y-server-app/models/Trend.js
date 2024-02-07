const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  text: { type: String, required: true },
  volumeOfUse: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Trend = mongoose.model('Trend', trendSchema);

module.exports = Trend;
