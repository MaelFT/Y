// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  full_name: { type: String, required: true, unique: true},
  bio: String,
  location: String,
  date_joined: { type: Date, default: Date.now },
  profile_image_url: String,
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username, password });
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
