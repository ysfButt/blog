// models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  email: String,
  password: String
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);