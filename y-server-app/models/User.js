// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: [true, "Please provide an Email!"], unique: true },
  password: { type: String, required: true },
  full_name: { type: String, required: [true, "Please provide a Password!"], unique: true},
  bio: String,
  location: String,
  date_joined: { type: Date, default: Date.now },
  profile_image_url: String,
  banner_image_url: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
